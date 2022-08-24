/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 2020, // Allows for the parsing of modern ECMAScript features
    'sourceType': 'module', // Allows for the use of imports
    'ecmaFeatures': {},
  },
  rules: {
    'no-irregular-whitespace': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  env: {
    'node': true,
  },
  plugins: ['sort-class-members', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
};
