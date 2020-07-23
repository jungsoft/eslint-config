<img src="https://jungsoft.io/static/media/jungsoft_logo.c44eaf52.png" width="300px"/>

# Eslint Config Jungsoft 

This package provides extensible shared config of JavaScript rules.

## Installation 

With NPM
```
npm install --save-dev eslint-config-jungsoft
```

With Yarn

```
yarn add eslint-config-jungsoft -D
```

## Usage 

Extending the ``eslint-config-jungsoft`` on a eslint config file 

```
module.exports = {
  extends: [
    "jungsoft",
  ],
```

And you can also override/add rules according to your needs 

```
module.exports = {
  extends: [
    "jungsoft",
  ],
  rules: {
    "react/prop-types": 0,
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["to"],
    }],
  }
```
