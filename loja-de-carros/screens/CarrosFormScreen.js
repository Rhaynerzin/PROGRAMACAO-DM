import React, { useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import uuid from 'react-native-uuid';

// Esquema de validação
const schema = yup.object({
  modelo: yup.string().required('Modelo obrigatório'),
  marca: yup.string().required('Marca obrigatória'),
  ano: yup
    .string()
    .required('Ano obrigatório')
    .matches(/^\d{4}$/, 'Ano inválido'),
  cor: yup.string().required('Cor obrigatória'),
  preco: yup.string().required('Preço obrigatório'),
});

export default function CarrosFormScreen({ navigation, route }) {
  const carro = route.params?.carro;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      modelo: '',
      marca: '',
      ano: '',
      cor: '',
      preco: '',
    },
  });

  useEffect(() => {
    if (carro) {
      setValue('modelo', carro.modelo);
      setValue('marca', carro.marca);
      setValue('ano', carro.ano);
      setValue('cor', carro.cor);
      setValue('preco', carro.preco);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await AsyncStorage.getItem('@carros');
      const carros = response ? JSON.parse(response) : [];

      if (carro) {
        // Edita carro
        const index = carros.findIndex((item) => item.id === carro.id);
        if (index >= 0) {
          carros[index] = { ...carro, ...data };
        }
      } else {
        // Novo carro
        carros.push({ id: uuid.v4(), ...data });
      }

      await AsyncStorage.setItem('@carros', JSON.stringify(carros));
      navigation.goBack();
    } catch (error) {
      console.log('Erro ao salvar:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {['modelo', 'marca', 'ano', 'cor', 'preco'].map((field) => (
        <Controller
          key={field}
          control={control}
          name={field}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={value}
                onChangeText={onChange}
                mode="outlined"
                style={{ marginBottom: 10 }}
                keyboardType={field === 'ano' || field === 'preco' ? 'numeric' : 'default'}
              />
              <HelperText type="error" visible={!!errors[field]}>
                {errors[field]?.message}
              </HelperText>
            </>
          )}
        />
      ))}
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </View>
  );
}
