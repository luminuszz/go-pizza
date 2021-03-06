import { RectButton } from 'react-native-gesture-handler';

import styled, { css, DefaultTheme } from 'styled-components/native';

export type Type = 'primary' | 'secondary';

type ContainerProps = {
  type: Type;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  border-radius: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.SUCCESS_900 : theme.colors.PRIMARY_800};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.utils.RFValue(14)};

  ${({ theme }) => css`
    color: ${theme.colors.TITLE};
    font-family: ${theme.fonts.primary};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.TITLE,
}))``;
