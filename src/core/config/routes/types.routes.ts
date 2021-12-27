// App routes
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppRouteStackParamsList = {
  Home: undefined;
};

export type NavigatorAppScreenProps<T extends keyof AppRouteStackParamsList> =
  NativeStackScreenProps<AppRouteStackParamsList, T>;

// Public routes
export type PublicRouteStackParamsList = {
  Login: undefined;
};

export type NavigatorPublicScreenProps<
  T extends keyof PublicRouteStackParamsList,
> = NativeStackScreenProps<PublicRouteStackParamsList, T>;
