const rules = [
  "../index",
  '../rules/react/react',
  '../rules/react/jsx',
  '../rules/jsx-a11y'
].map(require.resolve)

module.exports = {
  extends: [
    "plugin:react-hooks/recommended",
    "airbnb",
    ...rules
  ],
  env: {
    browser: true,
  },
  globals: {
    localStorage: true,
    window: true,
    document: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [
          ".js",
          ".jsx",
        ],
      },
    },
  }
};
