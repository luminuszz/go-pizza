import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Platform, ScrollView } from 'react-native';

import { ButtonBack } from '@components/elements/BackButton';
import { Button } from '@components/elements/Button';
import { Input } from '@components/elements/form/Input';
import { InputPrice } from '@components/elements/form/InputPrice';
import { Photo } from '@components/elements/Photo';
import { Header } from '@components/layout/Header';
import {
  getProductError,
  getProductStatus,
} from '@features/product/product.slice';
import { createProduct } from '@features/product/product.thunks';
import { zodResolver } from '@hookform/resolvers/zod';
import { MediaTypeOptions } from 'expo-image-picker';

import strings from '@core/config/locale/strings';
import { NavigatorAppScreenProps } from '@core/config/routes/types.routes';
import { toCents } from '@core/helpers/currencry';
import { usePickImage } from '@core/hooks/usePickImage';
import { useAppDispatch, useAppSelector } from '@core/hooks/useRedux';
import { useToast } from '@core/hooks/useToast';
import {
  createProductSchema,
  Product,
  CreateProductPayload,
} from '@core/types/product.types';
import { AsyncStatus } from '@core/types/redux.type';

import {
  Container,
  DeleteLabelButton,
  DeleteLabelText,
  Upload,
  PickButton,
  Form,
  Label,
  InputGroupHeader,
  MaxCharacters,
  InputGroup,
} from './styles';

type Props = NavigatorAppScreenProps<'CreateProduct'> & {};

function CreateProductScreen() {
  const appDispatch = useAppDispatch();
  const notify = useToast();

  const productStatus = useAppSelector(getProductStatus);
  const productError = useAppSelector(getProductError);

  const isLoading = productStatus === AsyncStatus.pending;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateProductPayload>({
    defaultValues: {
      description: '',
    },
    resolver: zodResolver(createProductSchema),
  });

  const { labels, messages } = strings.pages.createProduct;

  const { image, pickImageFromImageLibrary } = usePickImage({
    mediaTypes: MediaTypeOptions.Images,
    aspect: [4, 4],
  });

  const description = watch('description');

  function handleCreateProduct(formValues: CreateProductPayload) {
    const payload: Product = {
      ...formValues,
      imageUrl: image?.uri || null,
      gPrice: toCents(formValues.gPrice),
      mPrice: toCents(formValues.mPrice),
      pPrice: toCents(formValues.pPrice),
      slug: formValues.name.toLowerCase().trim(),
    };

    appDispatch(createProduct(payload));
  }

  useEffect(() => {
    if (productError && productStatus === AsyncStatus.rejected) {
      notify.error({
        title: 'Produto',
        description: messages.error,
      });
    }
    if (productStatus === AsyncStatus.succeeded) {
      notify.success({
        title: 'Produto',
        description: messages.success,
      });
    }
  }, [notify, productError, productStatus]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          componentLeft={<ButtonBack />}
          componentRight={
            <DeleteLabelButton>
              <DeleteLabelText>Deletar</DeleteLabelText>
            </DeleteLabelButton>
          }
          title="Cadastrar"
        />
        <Upload>
          <Photo uri={image?.uri || null} />
          <PickButton
            isLoading={isLoading}
            type="secondary"
            text="Escolher"
            onPress={pickImageFromImageLibrary}
          />
        </Upload>

        <Form>
          <InputGroup>
            <Label>{labels.name}</Label>
            <Input name="name" control={control} error={errors.name} />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>{labels.description}</Label>
              <MaxCharacters>
                {labels.maxCharactersHelperText(description.length)}
              </MaxCharacters>
            </InputGroupHeader>
            <Input
              name="description"
              control={control}
              multiline
              maxLength={60}
              style={{
                height: 80,
              }}
              error={errors.description}
            />
          </InputGroup>
          <InputGroup>
            <Label>{labels.sizesAndPricesTitle}</Label>
            <InputPrice
              error={errors.pPrice}
              name="pPrice"
              control={control}
              size="P"
              currency="R$"
            />
            <InputPrice
              error={errors.mPrice}
              name="mPrice"
              control={control}
              size="M"
              currency="R$"
            />
            <InputPrice
              error={errors.gPrice}
              name="gPrice"
              control={control}
              size="G"
              currency="R$"
            />
          </InputGroup>

          <Button
            isLoading={isLoading}
            type="primary"
            text="Cadastrar pizza"
            onPress={handleSubmit(handleCreateProduct)}
          />
        </Form>
      </ScrollView>
    </Container>
  );
}

export { CreateProductScreen };
