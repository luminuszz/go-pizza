import { LinearGradient } from 'expo-linear-gradient';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    colors: theme.colors.GRADIENT,
    start: { x: 0, y: 1 },
    end: { x: 0.5, y: 0.5 },
  }),
)`
  flex: 1;
  justify-content: center;
  padding: 0 10px;
`;

export const Content = styled.ScrollView.attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: theme.utils.getBottomSpace() + 48,
    },
  }),
)`
  width: 100%;
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.TITLE};
  `}
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordButtonLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.TITLE};
  `}
`;
