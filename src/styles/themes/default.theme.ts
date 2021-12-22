import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default {
  utils: {
    RFPercentage: (value: number) => `${RFPercentage(value)}px`,
    RFValue: (value: number) => `${RFValue(value)}px`,
    getBottomSpace,
    getStatusBarHeight,
  },
};
