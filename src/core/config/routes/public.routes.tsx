import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@screens/auth/SignIn';

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
