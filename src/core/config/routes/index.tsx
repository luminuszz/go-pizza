import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from '@core/config/routes/app.routes';
import { PublicRoutes } from '@core/config/routes/public.routes';
import { useAuth } from '@core/hooks/useAuth';

export function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
