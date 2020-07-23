const isCI = process.env.CI;

const javascriptConfig = {
  parser: "babel-eslint",
  extends: [
    "airbnb"
  ],
  rules: {
    "space-before-function-paren": 0,
    quotes: [2, "double", "avoid-escape"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-unused-vars": isCI ? ["error", { argsIgnorePattern: "^_" }] : 1,
    "no-console": isCI ? 2 : 1,
    "space-before-function-paren": 0,
    "arrow-parens": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-nested-ternary": 0,
    "one-var": ["warn", { initialized: "never", uninitialized: "always" }],
    "one-var-declaration-per-line": ["error", "initializations"],
    radix: [2, "as-needed"],
    "import/order": ["error", {
      "newlines-between": "always",
      groups: [
        ["external", "builtin"],
        ["internal"],
        ["parent", "sibling", "index"],
      ],
    }],
    "no-multiple-empty-lines": [2, { max: 1 }],
  }
}

export default javascriptConfig;
