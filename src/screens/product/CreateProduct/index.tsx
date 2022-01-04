import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Platform, ScrollView } from 'react-native';

import { ButtonBack } from '@components/elements/BackButton';
import { Button } from '@components/elements/Button';
import { Input } from '@components/elements/form/Input';
import { InputPrice } from '@components/elements/form/InputPrice';
import { Photo } from '@components/elements/Photo';
import { Header } from '@components/layout/Header';
import { zodResolver } from '@hookform/resolvers/zod';
import { MediaTypeOptions } from 'expo-image-picker';
import { isEmpty } from 'lodash';

import strings from '@core/config/locale/strings';
import { NavigatorAppScreenProps } from '@core/config/routes/types.routes';
import { toCents } from '@core/helpers/currencry';
import { usePickImage } from '@core/hooks/usePickImage';
import { createProductSchema, CreateProduct } from '@core/types/product.types';

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
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateProduct>({
    defaultValues: {
      description: '',
    },
    resolver: zodResolver(createProductSchema),
  });

  const { labels } = strings.pages.createProduct;

  const { image, pickImageFromImageLibrary } = usePickImage({
    mediaTypes: MediaTypeOptions.Images,
    aspect: [4, 4],
  });

  const description = watch('description');

  function handleCreateProduct(formValues: CreateProduct) {
    const payload: CreateProduct = {
      ...formValues,
      imageUrl: image?.uri || null,
      gPrice: toCents(formValues.gPrice),
      mPrice: toCents(formValues.mPrice),
      pPrice: toCents(formValues.pPrice),
    };

    console.log({
      payload,
    });
  }

  useEffect(() => {
    if (!isEmpty(errors)) {
      console.log({ errors });
    }
  }, [errors]);

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
            type="secondary"
            text="Algo aqui"
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
