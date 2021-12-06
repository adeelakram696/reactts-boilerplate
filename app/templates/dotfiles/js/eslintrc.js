const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "react/static-property-placement": 0,
    "react/destructuring-assignment": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    'react/jsx-wrap-multilines': 0,
  },
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: { "prettier/prettier": ["warn", prettierOptions] },
    },
  ],
  globals: {
    window: true,
    document: true,
    navigator: true,
    localStorage: true,
    URL: true,
    FormData: true,
    test: true,
    it: true,
    expect: true,
    describe: true,
    jest: true,
    beforeEach: true,
    beforeAll: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
