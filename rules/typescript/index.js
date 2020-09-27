module.exports = {

  /**
   * Typescript plugin rules
   * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
   */
  rules: {

    /**
     * Require explicit return types on functions and class methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],

    /**
     * Disallow unused variables and arguments
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
     */
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [2, {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],

    /**
     * Disallow unused expressions
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
     */
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': [2],

    /**
     * Require a specific member delimiter style for interfaces and type literals
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     */
    "@typescript-eslint/member-delimiter-style": 2,

    /**
     * Disallow shadow
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/325
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
     */
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": ["error"],

    /**
     * Disallow use before define
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
  }
}
