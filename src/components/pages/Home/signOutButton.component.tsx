import React from 'react';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { logoutWithEmailAndPassword } from '@features/auth/auth.thunks';

import { useAppDispatch } from '@core/hooks/useRedux';
import { useTheme } from '@core/hooks/useTheme';

export function SignOutButton() {
  const { theme } = useTheme();
  const appDispatch = useAppDispatch();

  function handleLogout() {
    appDispatch(logoutWithEmailAndPassword());
  }

  return (
    <TouchableOpacity onPress={handleLogout}>
      <MaterialIcons name="logout" color={theme.colors.TITLE} size={24} />
    </TouchableOpacity>
  );
}
