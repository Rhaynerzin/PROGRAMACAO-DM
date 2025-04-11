import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const titulos = [
  {
    nome: "Copa do Mundo de Clubes da FIFA",
    anos: [2009, 2011, 2015]
  },
  {
    nome: "Liga dos Campeões da UEFA",
    anos: [1992, 2006, 2009, 2011, 2015]
  },
  {
    nome: "Recopa Europeia da UEFA",
    anos: [1979, 1982, 1989, 1997]
  },
  {
    nome: "Supercopa da UEFA",
    anos: [1992, 1997, 2009, 2011, 2015]
  },
  {
    nome: "Taça Latina",
    anos: [1949, 1952]
  },
  {
    nome: "La Liga",
    anos: [1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974, 1985, 1991, 1992, 1993, 1994, 1998, 2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023]
  },
  {
    nome: "Copa do Rei",
    anos: [1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942, 1951, 1952, 1953, 1957, 1959, 1963, 1968, 1971, 1978, 1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015, 2016, 2017, 2021]
  },
  {
    nome: "Supercopa da Espanha",
    anos: [	1983, 1991, 1992, 1994, 1996, 2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018, 2023, 2025]
  },
  {
    nome: "Copa da Liga Espanhola",
    anos: [1983, 1986]
  },
  {
    nome: "Copa Eva Duarte",
    anos: [1949, 1952, 1953]
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
    backgroundColor: '#000000',
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
    color: '#edbb00'
  },
  anos: {
    fontSize: 16,
    color: '#edbb00'
  }
})