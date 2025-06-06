import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

// Dados simulados
const dadosVendas = {
  totalVendas: 150,
  receitaTotal: 450000,
  carrosVendidos: 120,
  fornecedoresAtivos: 15,
};

export default function DashboardScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Title>Total de Vendas</Title>
          <Paragraph>{dadosVendas.totalVendas}</Paragraph>
        </Card.Content>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Title>Receita Total</Title>
          <Paragraph>R$ {dadosVendas.receitaTotal.toLocaleString('pt-BR')}</Paragraph>
        </Card.Content>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Title>Carros Vendidos</Title>
          <Paragraph>{dadosVendas.carrosVendidos}</Paragraph>
        </Card.Content>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Title>Fornecedores Ativos</Title>
          <Paragraph>{dadosVendas.fornecedoresAtivos}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
