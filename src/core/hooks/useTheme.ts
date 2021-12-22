import { useMemo } from 'react';

import themes from '@styles/themes';

import { getCurrentTheme, toggleTheme } from '@core/features/theme.slice';
import { useAppDispatch, useAppSelector } from '@core/hooks/redux';

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
