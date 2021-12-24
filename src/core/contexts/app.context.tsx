import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { useFonts } from '@expo-google-fonts/dm-sans';
import fonts from '@styles/fonts';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { useTheme } from '@core/hooks/useTheme';

export const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();

  const [isFontLoaded] = useFonts(fonts);

  if (!isFontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="auto" backgroundColor="transparent" />
      {children}
      <Toast />
    </ThemeProvider>
  );
};
