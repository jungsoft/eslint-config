const rules = [
  "../index",
  "../rules/react/react",
  "../rules/react/hooks",
  "../rules/react/jsx",
  "../rules/react-native",
].map(require.resolve)

module.exports = {
  extends: [
    "airbnb",
    ...rules
  ],
  plugins: [
    "react-hooks",
    "react-native",
    "react-native-globals"
  ],
  env: {
    "react-native-globals/all": true
  }
};
