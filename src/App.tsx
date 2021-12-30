import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { Routes } from '@core/config/routes';
import { AppProvider } from '@core/contexts/app.context';
import { Store } from '@core/store';

export default function App() {
  return (
    <ReduxProvider store={Store}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ReduxProvider>
  );
}
