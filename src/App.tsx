import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '@core/hooks/useTheme';
import { Store } from '@core/store';

export default function App() {
  const { theme } = useTheme();

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar />
        </View>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
