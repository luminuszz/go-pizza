import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Button } from '@components/elements/Button';
import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const DeleteLabelButton = styled.TouchableOpacity`
  padding: 0 10px;
`;

export const DeleteLabelText = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.TITLE};
  `}
`;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const PickButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`;
