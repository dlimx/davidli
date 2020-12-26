const configs = ['prettier/react', 'plugin:prettier/recommended'];
const rules = {
  'max-len': ['error', { code: 140, ignoreUrls: true }],
  'react/prop-types': 'off',
  'import/prefer-default-export': 'off',
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
      },
    },
  ],
};
