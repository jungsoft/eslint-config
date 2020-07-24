module.exports = {

  /**
   * Variable rules
   * @see http://eslint.org/docs/rules/#variables
   */
  rules: {

    /**
     * Disallow unused variables
     * @see http://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': ["error", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],

    /**
     * Enforce variables to be declared
     * either together or separately in functions
     * @see https://eslint.org/docs/rules/one-var
     */
    "one-var": ["warn", { initialized: "never", uninitialized: "always" }],

    /**
     * Require or disallow newlines
     * around variable declarations
     * @see https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    "one-var-declaration-per-line": ["error", "initializations"],
  }
}
