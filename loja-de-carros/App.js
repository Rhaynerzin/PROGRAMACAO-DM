import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from './screens/DashboardScreen';
import CarrosListScreen from './screens/CarrosListScreen';
import CarrosFormScreen from './screens/CarrosFormScreen';
import FornecedoresListScreen from './screens/FornecedoresListScreen';
import FornecedoresFormScreen from './screens/FornecedoresFormScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack para Carros (Listagem + Cadastro)
function CarrosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Carros" component={CarrosListScreen} />
      <Stack.Screen name="Cadastro de Carro" component={CarrosFormScreen} />
    </Stack.Navigator>
  );
}

// Stack para Fornecedores (Listagem + Cadastro)
function FornecedoresStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Fornecedores" component={FornecedoresListScreen} />
      <Stack.Screen name="Cadastro de Fornecedor" component={FornecedoresFormScreen} />
    </Stack.Navigator>
  );
}

// Dashboard é só uma tela simples (pode virar stack se quiser)
function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Dashboard') {
                iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
              } else if (route.name === 'Carros') {
                iconName = focused ? 'car' : 'car-outline';
              } else if (route.name === 'Fornecedores') {
                iconName = focused ? 'account-group' : 'account-group-outline';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardStack} />
          <Tab.Screen name="Carros" component={CarrosStack} />
          <Tab.Screen name="Fornecedores" component={FornecedoresStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
