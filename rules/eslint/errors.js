const isCI = process.env.CI;

module.exports = {
  /**
   * Possible error rules
   * @see http://eslint.org/docs/rules/#possible-errors
   */
  rules: {
    /**
     * Disallow the use of console
     * @see http://eslint.org/docs/rules/no-console
     */
    "no-console": isCI ? 2 : 1,
  }
}
