import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Card, Text, Button, FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FornecedoresListScreen({ navigation }) {
  const [fornecedores, setFornecedores] = useState([]);

  const loadFornecedores = async () => {
    try {
      const data = await AsyncStorage.getItem('@fornecedores');
      const lista = data ? JSON.parse(data) : [];
      setFornecedores(lista);
    } catch (error) {
      console.log('Erro ao carregar fornecedores:', error);
    }
  };

  const deleteFornecedor = (id) => {
    Alert.alert('Excluir', 'Deseja excluir este fornecedor?', [
      { text: 'Cancelar' },
      {
        text: 'Excluir',
        onPress: async () => {
          const novaLista = fornecedores.filter((item) => item.id !== id);
          await AsyncStorage.setItem('@fornecedores', JSON.stringify(novaLista));
          setFornecedores(novaLista);
        },
      },
    ]);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadFornecedores);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={fornecedores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Title title={item.nome} subtitle={item.contato} />
            <Card.Content>
              <Text>Email: {item.email}</Text>
              <Text>Telefone: {item.telefone}</Text>
              <Text>Endereço: {item.endereco}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Cadastro de Fornecedor', { fornecedor: item })}>
                Editar
              </Button>
              <Button onPress={() => deleteFornecedor(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => navigation.navigate('Cadastro de Fornecedor')}
      />
    </View>
  );
}
