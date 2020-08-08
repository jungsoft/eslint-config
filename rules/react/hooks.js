module.exports = {

  /**
   * React Hooks plugin rules
   * @see https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
   */
  rules: {

    /**
     * Checks rules of Hooks
     * @see https://reactjs.org/docs/hooks-rules.html
     */
    "react-hooks/rules-of-hooks": "error",

    /**
     * Checks effect dependencies
     * @see https://reactjs.org/docs/hooks-rules.html
     */
    "react-hooks/exhaustive-deps": "warn"
  }
}
