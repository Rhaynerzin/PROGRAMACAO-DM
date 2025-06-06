import React, { useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import uuid from 'react-native-uuid';

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório'),
  contato: yup.string().required('Contato obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  telefone: yup.string().required('Telefone obrigatório'),
  endereco: yup.string().required('Endereço obrigatório'),
});

export default function FornecedoresFormScreen({ navigation, route }) {
  const fornecedor = route.params?.fornecedor;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: '',
      contato: '',
      email: '',
      telefone: '',
      endereco: '',
    },
  });

  useEffect(() => {
    if (fornecedor) {
      setValue('nome', fornecedor.nome);
      setValue('contato', fornecedor.contato);
      setValue('email', fornecedor.email);
      setValue('telefone', fornecedor.telefone);
      setValue('endereco', fornecedor.endereco);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await AsyncStorage.getItem('@fornecedores');
      const fornecedores = response ? JSON.parse(response) : [];

      if (fornecedor) {
        const index = fornecedores.findIndex((item) => item.id === fornecedor.id);
        if (index >= 0) {
          fornecedores[index] = { ...fornecedor, ...data };
        }
      } else {
        fornecedores.push({ id: uuid.v4(), ...data });
      }

      await AsyncStorage.setItem('@fornecedores', JSON.stringify(fornecedores));
      navigation.goBack();
    } catch (error) {
      console.log('Erro ao salvar fornecedor:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {['nome', 'contato', 'email', 'telefone', 'endereco'].map((field) => (
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
                keyboardType={field === 'telefone' ? 'phone-pad' : 'default'}
                autoCapitalize="none"
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
