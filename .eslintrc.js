const configs = ['prettier/react', 'plugin:prettier/recommended'];
const rules = {
  'max-len': [
    'error',
    {
      code: 140,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
    },
  ],
  'react/prop-types': 'off',
  'import/prefer-default-export': 'off',
  'react/jsx-props-no-spreading': 'off',
  'no-unused-vars': 'warn',
  'react/require-default-props': 'off',
};

module.exports = {
  extends: ['airbnb', 'prettier', ...configs],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...rules,
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      extends: ['airbnb-typescript', 'prettier/@typescript-eslint', ...configs],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      rules: {
        ...rules,
        '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      },
    },
  ],
};
