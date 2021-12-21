module.exports = {
  extends: [
    'google',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    strict: 0,
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'switch-colon-spacing': 0,
    'max-len': 'off',
    indent: 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*.?(scss|css|svg)', '**/*.?(test|stories).ts*'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
