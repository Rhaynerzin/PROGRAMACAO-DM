import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import CarList from '../screens/CarList';
import CarForm from '../screens/CarForm';
import Dashboard from '../screens/Dashboard';
import ExternalCarList from '../screens/ExternalCarList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CarList" component={CarList} options={{ title: 'Carros' }} />
      <Stack.Screen name="CarForm" component={CarForm} options={{ title: 'Cadastrar Carro' }} />
    </Stack.Navigator>
  );
}

function ExternalCarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExternalCarList"
        component={ExternalCarList}
        options={{ title: 'Lista de Montadoras' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Carros') iconName = 'directions-car';
            else if (route.name === 'Dashboard') iconName = 'dashboard';
            else if (route.name === 'Lista de Montadoras') iconName = 'factory';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Carros" component={CarStack} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Lista de Montadoras" component={ExternalCarStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
