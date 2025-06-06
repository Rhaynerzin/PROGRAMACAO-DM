import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Button, Card, Text, FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CarrosListScreen({ navigation }) {
  const [carros, setCarros] = useState([]);

  const loadCarros = async () => {
    try {
      const data = await AsyncStorage.getItem('@carros');
      const lista = data ? JSON.parse(data) : [];
      setCarros(lista);
    } catch (error) {
      console.log('Erro ao carregar carros:', error);
    }
  };

  const deleteCarro = (id) => {
    Alert.alert('Excluir', 'Deseja excluir este carro?', [
      { text: 'Cancelar' },
      {
        text: 'Excluir',
        onPress: async () => {
          const novaLista = carros.filter((item) => item.id !== id);
          await AsyncStorage.setItem('@carros', JSON.stringify(novaLista));
          setCarros(novaLista);
        },
      },
    ]);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadCarros);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Title title={`${item.modelo} (${item.ano})`} subtitle={item.marca} />
            <Card.Content>
              <Text>Cor: {item.cor}</Text>
              <Text>Preço: R$ {item.preco}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Cadastro de Carro', { carro: item })}>
                Editar
              </Button>
              <Button onPress={() => deleteCarro(item.id)}>Excluir</Button>
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
        onPress={() => navigation.navigate('Cadastro de Carro')}
      />
    </View>
  );
}
