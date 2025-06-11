import React from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Appbar, Card, Title } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';

export default function DashboardScreen() {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Toyota', 'Chevrolet', 'Honda', 'Volkswagen'],
    datasets: [
      {
        data: [45, 28, 35, 40],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: () => '#333',
    style: {
      borderRadius: 8,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Card style={{ padding: 16 }}>
          <Title style={{ marginBottom: 16 }}>Vendas por Marca</Title>
          <BarChart
            data={data}
            width={screenWidth - 60}
            height={220}
            chartConfig={chartConfig}
            fromZero
            showValuesOnTopOfBars
            style={{ borderRadius: 8 }}
          />
        </Card>
      </ScrollView>
    </View>
  );
}
