import React from 'react';

import { Provider } from 'react-redux';

import { Routes } from '@core/config/routes';
import { AppProvider } from '@core/contexts/app.context';
import { Store } from '@core/store';

export default function App() {
  return (
    <Provider store={Store}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Provider>
  );
}
