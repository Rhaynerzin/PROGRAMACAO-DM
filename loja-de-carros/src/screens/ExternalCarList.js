import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

const countryPTBR = {
  USA: 'Estados Unidos',
  Germany: 'Alemanha',
  Japan: 'Japão',
  France: 'França',
  Italy: 'Itália',
  UK: 'Reino Unido',
  Sweden: 'Suécia',
  Korea: 'Coreia',
  China: 'China',
  Romania: 'Romênia',
  Netherlands: 'Países Baixos',
  Switzerland: 'Suíça',
  Malaysia: 'Malásia',
  Spain: 'Espanha',
  CzechRepublic: 'República Checa',
  Ukraine: 'Ucrânia',
  Denmark: 'Dinamarca',
  Serbia: 'Sérvia'
};

export default function CarMakesList() {
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://www.carqueryapi.com/api/0.3/?cmd=getMakes')
      .then(response => {
        setMakes(response.data.Makes);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar fabricantes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={makes}
        keyExtractor={item => item.make_id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.makeName}>{item.make_display}</Text>
            <Text style={styles.makeCountry}>
              País: {countryPTBR[item.make_country] || item.make_country || 'Desconhecido'}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  makeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  makeCountry: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
