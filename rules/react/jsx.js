module.exports = {

  /**
   * React plugin JSX rules
   * @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
   */
  rules: {

    /**
     * Restrict file extensions that may contain JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    
    /**
     * Prevent JSX prop spreading
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     */
    "react/jsx-props-no-spreading": 0,
  }
}
