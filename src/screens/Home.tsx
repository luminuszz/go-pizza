import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { logoutWithEmailAndPassword } from '@features/session/session.thunks';

import { useAppDispatch } from '@core/hooks/useRedux';

export function Home() {
  const appDispatch = useAppDispatch();

  function handleLogout() {
    appDispatch(logoutWithEmailAndPassword());
  }

  return (
    <View>
      <Text>Algo aqui</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
