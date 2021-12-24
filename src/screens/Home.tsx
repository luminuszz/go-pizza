import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useAppDispatch } from '@core/hooks/useRedux';

export function Home() {
  const appDispatch = useAppDispatch();

  return (
    <View>
      <Text>Algo aqui</Text>
    </View>
  );
}
