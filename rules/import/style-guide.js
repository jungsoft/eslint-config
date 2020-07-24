module.exports = {

  /**
   * Import plugin style guide rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    /**
     * Prefer a default export if module exports a single name
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     */
    "import/prefer-default-export": 0,

    /**
     * Enforce a convention in module import order
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    "import/order": ["error", {
      "newlines-between": "always",
      groups: [
        ["external", "builtin"],
        ["internal"],
        ["parent", "sibling", "index"],
      ],
    }],
  }
}
