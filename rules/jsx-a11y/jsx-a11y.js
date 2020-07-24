module.exports = {

  /**
   * JSX a11y plugin rules
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
   */
  rules: {

    /**
     * Enforce all anchors are valid, navigable elements
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
     */
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to"],
    }],

    /**
     * Enforce a clickable non-interactive element has at least one keyboard event listener
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
     */
    "jsx-a11y/click-events-have-key-events": 0,

    /**
     * Enforce that <label> elements have the htmlFor prop
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
     */
    "jsx-a11y/label-has-for": 0,

    /**
     * Enforces that <audio> and <video> elements must have a <track> for captions
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
     */
    "jsx-a11y/media-has-caption": 0,

    /**
     * Enforce non-interactive elements have no interactive handlers
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
     */
    "jsx-a11y/no-static-element-interactions": 0,

    /**
     * Enforce that a label tag has a text label and an associated control.
     * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
     */
    "jsx-a11y/label-has-associated-control": 0,
  }
}
