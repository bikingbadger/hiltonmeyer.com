---
title: Add linting to JS Project
navtitle: Linting
description: Format code automatically and keep to standards
date: 2022-11-22
updated: 2022-11-22
layout: layouts/article.njk
tags:
  - content
  - articles
  - javascript
permalink: articles/linting.html
---
In order to setup linting and formatting you can use ESLint and Prettier. ESLint highlights issues in your code so you can catch issues with your code before running it and while actually writing the code. It can fix the issues automatically and can even be part of the a build step of the project while checking in some code so that you have. Prettier formats your code on the fly, again keeping inline with standards that have been formed over time so they are used by many bigger projects such as airBNB which is very widely used.

## Install

```bash
yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier prettier
yarn add --dev eslint-config-airbnb
```

`eslint-config-prettier` makes ESLint and Prettier play nice together. It turns off all ESLint rules that are unnecessary or might conflict with Prettier. 

## Rules

Add to the either to `package.json` or to separate files for each of the libraries

### `package.json`

```json
"eslintConfig": {
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module"
	},
	"extends": [
		"eslint:recommended",
		"plugin:prettier/recommended"
	],
	"env": {
		"node": true,
		"es6": true,
		"jest": true
	},
	"rules": {
		"prettier/prettier": "warn",
		"eqeqeq": "warn"
	}
},
"prettier": {
	"singleQuote": true,
	"printWidth": 120
}
```

### `.prettierrc`

```json
{ "singleQuote": true, "printWidth": 120 }
```

### `.eslintrc.json`

```json
{
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "env": {
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": "warn",
    "eqeqeq": "warn",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off"
  }
}
```