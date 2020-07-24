const rules = [
  "../index",
  '../rules/react/react',
  '../rules/react/jsx',
  '../rules/jsx-a11y'
].map(require.resolve)

module.exports = {
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended",
    ...rules
  ],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    localStorage: true,
    window: true,
    document: true,
  }
};
