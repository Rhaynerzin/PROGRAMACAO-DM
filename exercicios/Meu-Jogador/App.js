import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

  function alerta() {
    alert('É GOOOOOOL DO PETKOVIC!!!!!!!')
  }

  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.textoGrande} >Petkovic</Text>
        <Text style={styles.texto} >Dejan Petković, também conhecido como Petkovic, é um ex-jogador de futebol sérvio e, atualmente, treinador. Ele é amplamente reconhecido no Brasil, especialmente pelos seus feitos no Flamengo, onde se destacou como um dos grandes ídolos da torcida rubro-negra.</Text>

        

        <Image
          source={{
            uri: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2015/10/27/563008981e0ff.jpeg'
          }}
          
          
          style={{
            height: 300,
            width: 300,
            marginBottom: 20
          }}
        />

        <Image
          source={{uri: 'https://www.alagoas24horas.com.br/wp-content/uploads/2010/01/b9f925fad8b446f4a69becd5641b3c22_pet7.jpg'}}
          style={{
            height: 300,
            width: 300,
            marginBottom: 20
          }}
        />

<Image
          source={{uri: 'https://media.gazetadopovo.com.br/2011/06/4fc4c8a5dd9de197b7d76c189b2049a0-full.jpg'}}
          style={{
            height: 300,
            width: 300,
            marginBottom: 20
          }}
        />

<Image
          source={{uri: 'https://eusouflamengo.com.br/wp-content/uploads/2024/06/Petkovic-Edilson-Flamengo-2001.jpg'}}
          style={{
            height: 300,
            width: 300,
            marginBottom: 20
          }}
        />

<Image
          source={{uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgONbmUU8oKPu4O1QslRcD1RUJISpTW3BjVc66IGgvUjPpuNrGkcMUl3pL72NhgfMl-Ao4oohfvFcqs2m_1HXH4Q8THYXExskVskdHfG-LPU4pzQUT5dEi2kmS1a2Oia1kZbZzpxj-2oyKE/s1097/memorias-de-um-gol-petkovic-2001_t124513.jpg'}}
          style={{
            height: 300,
            width: 300,
            marginBottom: 20
          }}
        />

        
      <Button title='GOL!' onPress={alerta} ></Button>
      
      </View>


    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    margin: 5,
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  },
  texto: {
    margin: 5,
    fontSize: 30,
    fontWeight: 500,
    fontStyle: 'italic'
  },
});