import 'styled-components';
import defaultTheme from '@styles/themes/default.theme';

declare module 'styled-components' {
  export type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
