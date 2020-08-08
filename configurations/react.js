const rules = [
  "../index",
  "../rules/react/react",
  "../rules/react/hooks",
  "../rules/react/jsx",
  "../rules/jsx-a11y"
].map(require.resolve)

module.exports = {
  extends: [
    "airbnb",
    ...rules
  ],
  plugins: [
    "react-hooks"
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
