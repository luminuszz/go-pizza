// App routes
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppRouteStackParamsList = {
  Home: undefined;
  CreateProduct: undefined;
};

export type NavigatorAppScreenProps<T extends keyof AppRouteStackParamsList> =
  NativeStackScreenProps<AppRouteStackParamsList, T>;

// Public routes
export type PublicRouteStackParamsList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type NavigatorPublicScreenProps<
  T extends keyof PublicRouteStackParamsList,
> = NativeStackScreenProps<PublicRouteStackParamsList, T>;
