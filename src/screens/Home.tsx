import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigatorAppScreenProps } from '@core/config/routes/types.routes';
import { useAppDispatch } from '@core/hooks/useRedux';

type Props = NavigatorAppScreenProps<'Home'> & {};

export function Home() {
  const appDispatch = useAppDispatch();

  const { navigation } = useNavigation<NavigatorAppScreenProps<'Home'>>();

  navigation.navigate('Home');

  return (
    <View>
      <Text>Algo aqui</Text>
    </View>
  );
}
