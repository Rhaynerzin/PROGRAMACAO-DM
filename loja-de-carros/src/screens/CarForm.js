import React, { useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Validação com Yup
const schema = yup.object().shape({
  model: yup.string().required('Modelo é obrigatório'),
  brand: yup.string().required('Marca é obrigatória'),
  year: yup
    .number()
    .typeError('Ano deve ser número')
    .required('Ano é obrigatório')
    .min(1900, 'Ano inválido')
    .max(new Date().getFullYear(), 'Ano inválido'),
  price: yup
    .number()
    .typeError('Preço deve ser número')
    .required('Preço é obrigatório')
    .positive('Preço deve ser positivo'),
  plate: yup
    .string()
    .required('Placa é obrigatória')
    .matches(/^[A-Z]{3}-\d{4}$/, 'Placa deve estar no formato ABC-1234'),
  photoUrl: yup
    .string()
    .url('Informe uma URL válida')
    .notRequired()
    .nullable(),
});

export default function CarForm({ navigation, route }) {
  const { car } = route.params || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      model: '',
      brand: '',
      year: '',
      price: '',
      plate: '',
      photoUrl: '',
    },
  });

  // Preencher form se estiver editando
  useEffect(() => {
    if (car) {
      setValue('model', car.model);
      setValue('brand', car.brand);
      setValue('year', car.year.toString());
      setValue('price', car.price.toString());
      setValue('plate', car.plate);
      setValue('photoUrl', car.photoUrl || '');
    }
  }, [car, setValue]);

  async function onSubmit(data) {
    try {
      const storage = await AsyncStorage.getItem('cars');
      const cars = storage ? JSON.parse(storage) : [];

      if (car) {
        // Atualizar carro
        const updatedCars = cars.map(c =>
          c.id === car.id
            ? { ...car, ...data, year: Number(data.year), price: Number(data.price) }
            : c
        );
        await AsyncStorage.setItem('cars', JSON.stringify(updatedCars));
      } else {
        // Novo carro
        const newCar = {
          id: Date.now().toString(),
          ...data,
          year: Number(data.year),
          price: Number(data.price),
        };
        cars.push(newCar);
        await AsyncStorage.setItem('cars', JSON.stringify(cars));
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar o carro');
    }
  }

  // Máscara simples para placa (ABC-1234)
  function handlePlateChange(text) {
    let formatted = text.toUpperCase();
    if (formatted.length === 3 && !formatted.includes('-')) {
      formatted += '-';
    }
    setValue('plate', formatted);
  }

  // Máscara simples para preço (numérico com vírgula)
  function handlePriceChange(text) {
    let clean = text.replace(/[^0-9.,]/g, '');
    clean = clean.replace(',', '.');
    setValue('price', clean);
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Controller
        control={control}
        name="model"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Modelo"
            value={value}
            onChangeText={onChange}
            error={!!errors.model}
            mode="outlined"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.model}>
        {errors.model?.message}
      </HelperText>

      <Controller
        control={control}
        name="brand"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Marca"
            value={value}
            onChangeText={onChange}
            error={!!errors.brand}
            mode="outlined"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.brand}>
        {errors.brand?.message}
      </HelperText>

      <Controller
        control={control}
        name="year"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Ano"
            value={value}
            onChangeText={text => {
              if (/^\d*$/.test(text)) onChange(text);
            }}
            keyboardType="numeric"
            error={!!errors.year}
            mode="outlined"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.year}>
        {errors.year?.message}
      </HelperText>

      <Controller
        control={control}
        name="price"
        render={({ field: { value } }) => (
          <TextInput
            label="Preço (R$)"
            value={value}
            onChangeText={handlePriceChange}
            keyboardType="numeric"
            error={!!errors.price}
            mode="outlined"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.price}>
        {errors.price?.message}
      </HelperText>

      <Controller
        control={control}
        name="plate"
        render={({ field: { value } }) => (
          <TextInput
            label="Placa"
            value={value}
            onChangeText={handlePlateChange}
            autoCapitalize="characters"
            maxLength={8}
            error={!!errors.plate}
            mode="outlined"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.plate}>
        {errors.plate?.message}
      </HelperText>

      {/* Campo novo para URL da foto */}
      <Controller
        control={control}
        name="photoUrl"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="URL da Foto do Carro"
            value={value}
            onChangeText={onChange}
            error={!!errors.photoUrl}
            mode="outlined"
            autoCapitalize="none"
            keyboardType="url"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.photoUrl}>
        {errors.photoUrl?.message}
      </HelperText>

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ marginTop: 16 }}>
        Salvar
      </Button>
    </ScrollView>
  );
}
