import React from 'react';

import { HomeScreen } from '@components/pages/Home/home.screen';
import { CreateProductScreen } from '@components/pages/product/CreateProduct/createProduct.screen';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { AppRouteStackParamsList } from '@core/config/routes/types.routes';

const Stack = createNativeStackNavigator<AppRouteStackParamsList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* products */}
      <Stack.Group screenOptions={options}>
        <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
