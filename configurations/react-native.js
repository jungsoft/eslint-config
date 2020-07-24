const rules = [
  "../index",
  '../rules/react/react',
  '../rules/react/jsx',
  '../rules/react-native',
].map(require.resolve)

module.exports = {
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended",
    ...rules
  ],
  plugins: [
    "react-native",
    "react-native-globals"
  ],
  env: {
    "react-native-globals/all": true
  },
  rules: {
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 2,
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 2,
  }
};
