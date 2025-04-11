import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const jogadores = [
  {
    nome: "Robert Lewandowski",
    numero: 9,
    imagem: "https://i.pinimg.com/736x/7a/de/a9/7adea9e8f1940d9401deb66f82309f23.jpg"
  },
  {
    nome: "Raphinha",
    numero: 11,
    imagem: "https://i.pinimg.com/736x/d7/f1/0b/d7f10b46656fb2baaf1c0d0e354ec8e2.jpg"
  },
  {
    nome: "Pedri",
    numero: 8,
    imagem: "https://i.pinimg.com/736x/56/fd/4a/56fd4a53efe5bb075e1cb64e010cf8d2.jpg"
  },
  {
    nome: "Lamine Yamal",
    numero: 19,
    imagem: "https://i.pinimg.com/736x/85/16/4b/85164b4269b348093834d286dd390849.jpg"
  },
  {
    nome: "Wojciech Szczęsny",
    numero: 25,
    imagem: "https://i.pinimg.com/736x/a7/2a/12/a72a12f66ea4cf77f9bb18140c6a315a.jpg"
  },
]

export default function JogadoresScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.numero}>Camisa: {item.numero}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000000'
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#004D98',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2
  },
  image: {
    width: 100,
    height: 100
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#edbb00'
  },
  numero: {
    fontSize: 16,
    color: '#edbb00'
  }
})