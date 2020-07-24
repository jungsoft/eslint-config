module.exports = {

  /**
   * React Native plugin rules
   * @see https://github.com/Intellicode/eslint-plugin-react-native#list-of-supported-rules
   */
  rules: {

    /**
     * Detect JSX components with inline styles that contain literal values
     * @see https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
     */
    "react-native/no-inline-styles": 1,

    /**
     * Detect StyleSheet rules and inline styles containing color literals instead of variables
     * @see https://github.com/Intellicode/eslint-plugin-react-native#list-of-supported-rules
     */
    "react-native/no-color-literals": 2,

    /**
     *  Detect StyleSheet rules which are not used in your React components
     * @see https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
     */
    "react-native/no-unused-styles": 2,

    /**
     * Detect JSX components with inline styles that contain literal values
     * @see https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
     */
    "react-native/no-inline-styles": 2,

    /**
     * Detect raw text outside of Text component
     * @see https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
     */
    "react-native/no-raw-text": 2,
  }
}
