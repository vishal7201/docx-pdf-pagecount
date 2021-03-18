module.exports = {
  "root": true,
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true,
    "jquery": false,
    "jest": true,
    "jasmine": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "2018"
  },
  "rules": {
    "max-len": [
      "warn", { "ignoreComments": true, "code": 120 }
    ],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "function-call-argument-newline": [
      "warn",
      "consistent"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-var": [
      "error"
    ],
    "no-console": [
      "off"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-mixed-spaces-and-tabs": [
      "warn"
    ],
    "comma-dangle": [
      "error",
      "never"]
  }
};
