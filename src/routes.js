import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListP from './pages/ListP';
import ListE from './pages/ListE';
import ListC from './pages/ListC';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Usuários"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#7172f1' },
        }}
      >
        <Stack.Screen name="BuyList" component={ListP} />
        <Stack.Screen name="Lista de Produtos" component={ListE} />
        <Stack.Screen name="Lista de Compras" component={ListC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
