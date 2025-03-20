// imports dos componentes e libs
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// função principal do componente
export default function App() {
  // lógica do meu componente
  const nome = "Rhayner"

  function alerta() {
    alert('Clicou no Botão!!!')
  }

  // retorno é um código JSX (Template) do que vai ser
  // renderizado na tela
  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={{ fontSize: 40 }} >MEU TEXTO</Text>
        <Text style={{ fontSize: 40 }} >{nome}</Text>
        <Text style={styles.textoGrande} >Open up App.js to start working on your app!</Text>

        <Button title='ENVIAR' onPress={alerta} ></Button>

        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/47/e7/fd/47e7fd39f8e5a44877234f1d3c7bf1dc.jpg'
          }}
          style={{
            height: 300,
            width: 300
          }}
        />

        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        


      </View>


    </ScrollView>    
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});