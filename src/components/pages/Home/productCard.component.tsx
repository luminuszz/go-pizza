import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

import { useTheme } from '@core/hooks/useTheme';

const Container = styled.View`
  width: 100%;
`;

const Content = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

const Image = styled.Image`
  width: 104px;
  height: 104px;

  border-radius: 52px;
  margin-right: 20px;
`;

const Details = styled.View`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.utils.RFValue(20)};
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.SECONDARY_900};
  `}
`;

const Description = styled.Text`
  margin-right: 21px;

  ${({ theme }) => css`
    font-size: ${theme.utils.RFValue(12)};
    line-height: ${theme.utils.RFValue(20)};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.SECONDARY_400};
  `}
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  margin: 12px 0 12px 124px;
  background-color: ${({ theme }) => theme.colors.SHAPE};
`;

export type ProductCardType = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
};

type Props = RectButtonProps & {
  product: ProductCardType;
};

export function ProductCard({ product, ...props }: Props) {
  const { theme } = useTheme();

  return (
    <Container>
      <Content {...props}>
        <Image source={{ uri: product.photo_url }} />
        <Details>
          <Header>
            <Name>{product.name}</Name>
            <Feather
              name="chevron-right"
              size={18}
              color={theme.colors.SHAPE}
            />
          </Header>

          <Description>{product.description}</Description>
        </Details>
      </Content>

      <Divider />
    </Container>
  );
}
