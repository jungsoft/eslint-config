module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true
  },
  extends: [
    // ESLint Base Rules
    '../rules/eslint/stylistic',
    '../rules/eslint/variables',
    '../rules/eslint/errors',
    '../rules/eslint/es6',
    '../rules/eslint/best-practices',

    // Import Plugin Rules
    '../rules/import/helpful-warnings',
    '../rules/import/style-guide'
  ].map(require.resolve)
};
