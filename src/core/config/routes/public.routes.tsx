import React from 'react';

import { ForgotPasswordScreen } from '@components/pages/auth/ForgotPassword/forgotPassword.screen';
import { LoginScreen } from '@components/pages/auth/SignIn';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

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
