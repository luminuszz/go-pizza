import { useMemo } from 'react';

import { getCurrentTheme, toggleTheme } from '@features/theme.slice';
import themes from '@styles/themes';

import { useAppDispatch, useAppSelector } from '@core/hooks/useRedux';

type UseThemeType = {
  theme: typeof themes.default;
  changeTheme: () => void;
};

export function useTheme(): UseThemeType {
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector(getCurrentTheme);

  const theme = useMemo(
    () => themes[currentTheme || 'default'],
    [currentTheme],
  );

  const changeTheme = () => dispatch(toggleTheme());

  return {
    theme,
    changeTheme,
  };
}
