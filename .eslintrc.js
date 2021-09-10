module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    'react/no-else-return': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/object-curly-newline': 0,
    'linebreak-style': 0,
    'eslint react/prop-types': 0,
  },
};
