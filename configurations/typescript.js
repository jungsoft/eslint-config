const rules = [
  "../index",
  "../rules/typescript",
].map(require.resolve)

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    ...rules,
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tx", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
