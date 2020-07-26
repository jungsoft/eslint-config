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
  }
};
