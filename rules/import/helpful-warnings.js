module.exports = {

  /**
   * Import plugin helpful warning rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    /**
     * Forbid the use of extraneous packages
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

     /**
     * Report use of exported name as identifier of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    "import/no-named-as-default": 0,

    /**
     * Report use of exported name as property of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     */
    "import/no-named-as-default-member": 0,
  }
}
