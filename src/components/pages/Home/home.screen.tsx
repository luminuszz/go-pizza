import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/layout/Header';
import { SearchComponent } from '@components/pages/Home/search.component';
import {
  getProductError,
  getProductStatus,
  selectAllProducts,
  selectProductsCount,
} from '@features/product/product.slice';
import { fetchAllProducts } from '@features/product/product.thunks';
import { useFocusEffect } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import styled, { css } from 'styled-components/native';

import { useAppDispatch, useAppSelector } from '@core/hooks/useRedux';
import { useToast } from '@core/hooks/useToast';
import { AsyncStatus } from '@core/types/redux.type';

import { GreetingComponent } from './greeting.component';
import { ProductCard } from './productCard.component';
import { SignOutButton } from './signOutButton.component';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 25px 24px 0;

  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.SHAPE};
`;

const MenuItemsNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.utils.RFValue(14)};
    color: ${theme.colors.SECONDARY_900};
    font-family: ${theme.fonts.primary};
  `}
`;

export const Title = styled.Text`
  line-height: ${({ theme }) => theme.utils.RFValue(23)};

  ${({ theme }) => css`
    font-size: ${theme.utils.RFValue(22)};
    color: ${theme.colors.SECONDARY_900};
    font-family: ${theme.fonts.secondary};
  `}
`;

export function HomeScreen() {
  const notify = useToast();
  const appDispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productStatus = useAppSelector(getProductStatus);
  const productError = useAppSelector(getProductError);

  const isLoading = useMemo(
    () => productStatus === AsyncStatus.pending,
    [productStatus],
  );

  useFocusEffect(
    useCallback(() => {
      appDispatch(fetchAllProducts());
    }, [appDispatch]),
  );

  useEffect(() => {
    const isError = productError && productStatus === AsyncStatus.rejected;

    if (isError) {
      notify.error({
        title: productError.message,
      });
    }
  }, [notify, productError, productStatus]);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Header
        componentRight={<SignOutButton />}
        componentLeft={<GreetingComponent />}
      />
      <SearchComponent
        onSearch={(value) => {
          console.log({ value });
        }}
        onClear={() => {}}
      />

      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>{productsCount} pizzas</MenuItemsNumber>
      </MenuHeader>

      <FlatList
        style={{ marginTop: 10, padding: 15 }}
        keyExtractor={(product) => product.id}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={{
              id: item.id,
              description: item.description,
              photo_url: item.imageUrl || '',
              name: item.name,
            }}
          />
        )}
      />
    </Container>
  );
}
