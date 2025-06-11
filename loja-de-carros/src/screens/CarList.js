import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List, FAB, IconButton } from 'react-native-paper';

export default function CarList({ navigation }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadCars);
    return unsubscribe;
  }, [navigation]);

  async function loadCars() {
    const data = await AsyncStorage.getItem('cars');
    setCars(data ? JSON.parse(data) : []);
  }

  // Excluir carro com confirmação
  function confirmDelete(carId) {
    Alert.alert(
      'Excluir carro',
      'Tem certeza que deseja excluir este carro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => deleteCar(carId),
        },
      ]
    );
  }

  async function deleteCar(carId) {
    try {
      const filteredCars = cars.filter(c => c.id !== carId);
      await AsyncStorage.setItem('cars', JSON.stringify(filteredCars));
      setCars(filteredCars);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao excluir o carro');
    }
  }

  function renderItem({ item }) {
    return (
      <List.Item
        title={item.model}
        description={`Marca: ${item.brand} - Ano: ${item.year} - Preço: R$ ${item.price.toFixed(2)}`}
        left={() =>
          item.photoUrl ? (
            <Image
              source={{ uri: item.photoUrl }}
              style={{ width: 60, height: 40, borderRadius: 4, marginRight: 8 }}
              resizeMode="cover"
            />
          ) : null
        }
        right={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton
              icon="pencil"
              size={24}
              onPress={() => navigation.navigate('CarForm', { car: item })}
            />
            <IconButton
              icon="delete"
              size={24}
              color="red"
              onPress={() => confirmDelete(item.id)}
            />
          </View>
        )}
        style={{ paddingRight: 0 }}
      />
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#eee' }} />}
      />
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        onPress={() => navigation.navigate('CarForm')}
      />
    </View>
  );
}
