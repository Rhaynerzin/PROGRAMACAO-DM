import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  },
]

export default function TitulosScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.anos}>{item.anos.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  card: {
    backgroundColor: '#004D98',
    padding: 35,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center'
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },
  anos: {
    fontSize: 16,
    color: 'white'
  }
})