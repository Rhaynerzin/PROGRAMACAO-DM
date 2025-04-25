import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Title, Paragraph, List } from 'react-native-paper';

export default function ReceitaScreen({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image
        source={{ uri: receita.imagem }}
        style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 10 }}
      />
      <Title>{receita.nome}</Title>
      <Paragraph>Tempo de Preparo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>Porções: {receita.porcoes}</Paragraph>

      <Title style={{ marginTop: 10 }}>Ingredientes:</Title>
      {receita.ingredientes.map((item, index) => (
        <List.Item key={index} title={item} left={() => <List.Icon icon="circle" />} />
      ))}

      <Title style={{ marginTop: 10 }}>Modo de Preparo:</Title>
      {receita.modoPreparo.map((passo, index) => (
        <List.Item key={index} title={passo} left={() => <List.Icon icon="checkbox-marked-outline" />} />
      ))}
    </ScrollView>
  );
}
