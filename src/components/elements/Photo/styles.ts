import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 80px;
`;

export const Placeholder = styled.View`
  width: 160px;
  height: 160px;

  border-radius: 80px;
  justify-content: center;
  align-items: center;

  border: 1px dashed ${({ theme }) => theme.colors.SECONDARY_900};
`;

export const PlaceholderTitle = styled.Text`
  font-size: ${({ theme }) => theme.utils.RFValue(14)};
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.SECONDARY_900};
  `}
`;
