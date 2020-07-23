const javascript = require("./javascript.js");

module.exports = {
  extends: [
    javascript,
    "plugin:react-hooks/recommended",
  ],
  env: {
    browser: true,
  },
  globals: {
    localStorage: true,
    window: true,
    document: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    },
  },
  rules: {
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to"],
    }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
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
    "react/prefer-stateless-function": [2, { ignorePureComponents: false }],
    "jsx-a11y/media-has-caption": "off",
  }
}
