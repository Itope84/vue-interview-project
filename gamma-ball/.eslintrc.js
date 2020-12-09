module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', '.']],
        extensions: ['.vue', '.js'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
