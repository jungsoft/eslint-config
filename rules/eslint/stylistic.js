module.exports = {

  /**
   * Stylistic rules
   * @see http://eslint.org/docs/rules/#stylistic-issues
   */
  rules: {

    /**
     * Enforce consistent indentation
     * @see http://eslint.org/docs/rules/indent
     * @fixable
     */
    indent: ["error", 2, { SwitchCase: 1 }],

    /**
     * Disallow multiple empty lines
     * @see http://eslint.org/docs/rules/no-multiple-empty-lines
     * @fixable
     */
    "no-multiple-empty-lines": [2, { max: 1 }],

    /**
     * Disallow nested ternary expressions
     * @see http://eslint.org/docs/rules/no-nested-ternary
     */
    "no-nested-ternary": 0,

    /**
     * Require or disallow newlines around variable declarations
     * @see http://eslint.org/docs/rules/one-var-declaration-per-line
     * @fixable
     */
    "one-var-declaration-per-line": ["error", "initializations"],

    /**
     * Enforce variables to be declared either together or separately in functions
     * @see http://eslint.org/docs/rules/one-var
     */
    "one-var": ["warn", { initialized: "never", uninitialized: "always" }],

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     * @see http://eslint.org/docs/rules/quotes
     * @fixable
     */
    quotes: [2, "double", "avoid-escape"],

    /**
     * Enforce consistent spacing before function definition opening parenthesis
     * @see http://eslint.org/docs/rules/space-before-function-paren
     * @fixable
     */
    "space-before-function-paren": 0,

    /**
     * Rule to ensure newline per method call when chaining calls
     * @see https://eslint.org/docs/rules/newline-per-chained-call
     */
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
  }
}
