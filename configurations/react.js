module.exports = {
  extends: [
    "./index",
    "plugin:react-hooks/recommended",
    "airbnb",

    './rules/react/react',
    './rules/react/jsx',
    './rules/react/jsx-a11y'
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
          ".ts",
          ".tsx",
        ],
      },
    },
  }
};
