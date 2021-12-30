import React from 'react';
import {
  GestureHandlerRootView,
  RectButtonProps,
} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from '@core/hooks/useTheme';

import { Container } from './styles';

type Props = RectButtonProps & {};

export function ButtonBack({ ...props }: Props) {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <GestureHandlerRootView>
      <Container {...props}>
        <MaterialIcons
          name="chevron-left"
          size={RFValue(18)}
          color={colors.TITLE}
        />
      </Container>
    </GestureHandlerRootView>
  );
}
