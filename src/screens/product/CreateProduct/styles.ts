import { Button } from '@components/elements/Button';
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
  max-width: 100px;
  margin-left: 32px;
  padding: 0 10px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 24px;
`;

export const Label = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.SECONDARY_900};
  `}
`;

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MaxCharacters = styled.Text`
  font-size: 10px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.SECONDARY_900};
  `}
`;
