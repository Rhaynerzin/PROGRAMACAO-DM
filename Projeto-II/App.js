import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './components/primeiroComponente';
import SegundoComponente from './components/segundoComponente';
import JavascriptComponente from './components/JavascriptComponente'
import Perfil from './components/Perfil'

export default function App() {
  return (
    <View style={styles.container}>
      
      <PrimeiroComponente />
      <SegundoComponente />
      <JavascriptComponente />
      <Perfil 
        nome="Rhayner"
        sobrenome="de Paiva"
        idade={22}
    />
    <Perfil 
        nome="Alisson"
        sobrenome="dos Santos"
        idade={25}
    />
    <Perfil 
        nome="Romao"
        sobrenome="de Sena"
        idade={27}
    />
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
