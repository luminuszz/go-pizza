module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '@': './src',
            '@core': './src/core',
            '@components': './src/components',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
