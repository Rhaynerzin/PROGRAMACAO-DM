import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Text, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarChart } from 'react-native-chart-kit';

export default function Dashboard() {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);

  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    async function loadSales() {
      try {
        const storage = await AsyncStorage.getItem('cars');
        const cars = storage ? JSON.parse(storage) : [];

        const salesCount = cars.reduce((acc, car) => {
          acc[car.brand] = (acc[car.brand] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(salesCount);
        const data = Object.values(salesCount);

        setSalesData({ labels, data });
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados de vendas');
      } finally {
        setLoading(false);
      }
    }

    loadSales();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!salesData || salesData.data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text>Nenhuma venda registrada.</Text>
      </View>
    );
  }

  const chartWidth = screenWidth - 32; // 16 padding de cada lado

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(63, 81, 181, ${opacity})`,
    barPercentage: 0.7,
    decimalPlaces: 0,
    style: {
      borderRadius: 8,
    },
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView>
        <Title
          style={{
            textAlign: 'center',
            marginBottom: 20,
            flexWrap: 'wrap',
            maxWidth: '100%',
            fontSize: screenWidth < 350 ? 18 : 24,
          }}
        >
          Vendas por Marca
        </Title>

        <BarChart
          data={{
            labels: salesData.labels,
            datasets: [
              {
                data: salesData.data,
              },
            ],
          }}
          width={chartWidth}
          height={260}
          chartConfig={chartConfig}
          verticalLabelRotation={45}
          fromZero
          showValuesOnTopOfBars
          style={{ borderRadius: 8 }}
        />
      </ScrollView>
    </View>
  );
}
