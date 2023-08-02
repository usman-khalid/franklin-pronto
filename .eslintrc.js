module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  rules: {
    curly: 'error',
    'no-param-reassign': [2, { props: false }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/extensions': [
      'error',
      {
        js: 'always',
      },
    ],
  },
};
