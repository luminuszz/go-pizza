import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { ForgotPasswordScreen } from '@screens/auth/ForgotPassword';
import { LoginScreen } from '@screens/auth/SignIn';

import { PublicRouteStackParamsList } from '@core/config/routes/types.routes';

const Stack = createNativeStackNavigator<PublicRouteStackParamsList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={options} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
