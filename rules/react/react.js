module.exports = {
  /**
   * React plugin rules
   * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
   */
  rules: {
    /**
     * Enforce stateless React Components to be written as a pure function
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": [2, { ignorePureComponents: false }],

    /**
     * Prevent missing props validation in a React component definition
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    "react/prop-types": 0,

    /**
     * Enforce component methods order
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    "react/sort-comp": ["error", {
        order: [
          "instance-variables",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],

    /**
     * Enforce consistent usage of destructuring assignment
     * of props, state, and context
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    "react/destructuring-assignment": 0,
  }
}
