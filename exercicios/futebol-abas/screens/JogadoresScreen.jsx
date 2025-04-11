import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const jogadores = [
  {
    nome: "Lionel Messi",
    numero: 10,
    imagem: "https://i.pinimg.com/736x/63/94/f6/6394f64a00b5e19cc2485b69f2ea7ac4.jpg"
  },
  {
    nome: "Romário",
    numero: 11,
    imagem: "https://i.pinimg.com/736x/e6/d0/1a/e6d01a57b86a43aef2e71194ce30187d.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
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
    backgroundColor: 'black'
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
    color: 'white'
  },
  numero: {
    fontSize: 16,
    color: 'white'
  }
})