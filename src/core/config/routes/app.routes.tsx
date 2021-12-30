import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { CreateProductScreen } from '@screens/product/CreateProduct';

import { AppRouteStackParamsList } from '@core/config/routes/types.routes';

const Stack = createNativeStackNavigator<AppRouteStackParamsList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="CreateProduct">
      <Stack.Group screenOptions={options}>
        <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
      </Stack.Group>

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
