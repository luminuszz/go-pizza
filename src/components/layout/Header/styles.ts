import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.GRADIENT,
}))`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${getStatusBarHeight() + 33}px 20px 24px;
`;

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.TITLE};
  `}
`;
