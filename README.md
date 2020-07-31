<img src=".github/docs/logo.png" width="300px"/>

# Eslint Config Jungsoft

[![Stars](https://img.shields.io/github/stars/jungsoft/eslint-config?color=1661A5&style=flat-square)](https://github.com/jungsoft/eslint-config/stargazers)
[![Forks](https://img.shields.io/github/forks/jungsoft/eslint-config?color=%231661A5&style=flat-square)](https://github.com/jungsoft/eslint-config/network/members)
[![Contributors](https://img.shields.io/github/contributors/jungsoft/eslint-config?color=1661A5&style=flat-square)](https://github.com/jungsoft/eslint-config/graphs/contributors)
[![NPM](https://img.shields.io/npm/v/@jungsoft/eslint-config?color=1661A5&style=flat-square)](https://www.npmjs.com/package/@jungsoft/eslint-config)

This package provides extensible shared config of JavaScript, React and React Native rules

# :pushpin: Table of Contents

* [Installation](#construction_worker-installation)
* [Usage](#pushpin-usage)
* [License](#closed_book-license)

# :construction_worker: Installation

### With Yarn

```
yarn add eslint @jungsoft/eslint-config -D
```

### With NPM
```
npm install --save-dev eslint @jungsoft/eslint-config
```

## :pushpin: Usage

This package includes the following configurations:

* [`@jungsoft`](./configurations/main.js) – The base rules of the config.
* [`@jungsoft`](./configurations/typescript.js) – The [TypeScript](https://www.typescriptlang.org/) config.
* [`@jungsoft/eslint-config/react`](./configurations/react.js) – Extends the base jungsoft configuration by adding [React](https://facebook.github.io/react/) related rules.
* [`@jungsoft/eslint-config/react-native`](./configurations/react-native.js) – Extends the base jungsoft configuration by adding [React Native](https://reactnative.dev/) related rules.

Example:

Shareable config for JavaScript projects
```json
{
  "extends": [
    "@jungsoft" 
  ]
}
```

Shareable config for TypeScript projects
```json
{
  "extends": [
    "@jungsoft",
    "@jungsoft/eslint-config/typescript"
  ]
}
```

Shareable config for React projects
```json
{
  "extends": [
    "@jungsoft/eslint-config/react" 
  ]
}
```

Shareable config for React Native projects
```json
{
  "extends": [
    "@jungsoft/eslint-config/react-native" 
  ]
}
```

And you can also override/add rules according to your needs

```
{
  extends: [
    "@jungsoft",
  ],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    "react/prop-types": 1,
    "jsx-a11y/anchor-is-valid": ["warn", {
      components: ["Link"],
      specialLink: ["to"],
    }],
  }
}
```

# :closed_book: License

This project is under the [MIT license](https://github.com/jungsoft/eslint-config/master/LICENSE).

Made with love by [Laura Beatris](https://github.com/LauraBeatris) 💜🚀
