module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-undef': 'off',
    camelcase: 'off',
    'require-default-props': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-no-bind': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react$/',
          'module',
          '/^@core/',
          [('index', 'parent', 'sibling')],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};