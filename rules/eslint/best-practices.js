module.exports = {

  /**
   * Best practice rules
   * @see http://eslint.org/docs/rules/#best-practices
   */
  rules: {

    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     * @see http://eslint.org/docs/rules/radix
     */
    radix: [2, "as-needed"],


    /**
     * Disallow unused expressions
     * @see https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 0,
  }
}
