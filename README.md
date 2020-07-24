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
* [`@jungsoft/eslint-config/react`](./configurations/react.js) – To be used in addition to ``@jungsoft`` configuration by projects that use [React](https://facebook.github.io/react/).

Example:

```json
{
  "extends": [
    "@jungsoft",
    "@jungsoft/eslint-config/react"
  ]
}
```

And you can also override/add rules according to your needs

```
{
  extends: [
    "@jungsoft",
  ],
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
