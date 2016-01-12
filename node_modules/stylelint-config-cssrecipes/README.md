# stylelint-config-cssrecipes
[![npm](https://img.shields.io/npm/v/stylelint-config-cssrecipes.svg?style=flat)](https://www.npmjs.com/package/stylelint-config-cssrecipes)
[![Travis Build Status](https://travis-ci.org/stylelint/stylelint-config-cssrecipes.svg?branch=master)](https://travis-ci.org/stylelint/stylelint-config-cssrecipes)

> cssrecipes shareable config for stylelint

## Installation

```console
$ npm install stylelint-config-cssrecipes
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-cssrecipes"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-cssrecipes",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

```console
$ git clone https://github.com/stylelint/stylelint-config-cssrecipes.git
$ git checkout -b patch-1
$ npm install
$ npm test
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

---
