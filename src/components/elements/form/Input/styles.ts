import { TextInput } from 'react-native';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export type Type = 'primary' | 'secondary';

type Props = {
  type: Type;
};

export const Container = styled(TextInput).attrs<Props>(
  ({ type, theme }: { type: Type; theme: DefaultTheme }) => ({
    placeholderTextColor:
      type === 'primary' ? theme.colors.SECONDARY_900 : theme.colors.PRIMARY_50,
  }),
)<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0 7px 20px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.fonts.primary};
    border: 1px solid ${theme.colors.SHAPE};
    color: ${type === 'primary'
      ? theme.colors.SECONDARY_900
      : theme.colors.TITLE};
  `}
`;
