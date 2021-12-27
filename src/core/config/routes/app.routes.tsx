import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Home } from '@screens/Home';

import { AppRouteStackParamsList } from '@core/config/routes/types.routes';

const Stack = createNativeStackNavigator<AppRouteStackParamsList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={options}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
