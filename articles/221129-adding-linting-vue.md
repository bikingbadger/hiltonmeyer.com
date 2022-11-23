---
title: Add linting to Vue
navtitle: Vue Linting
description: Adding linting to a Vue project
date: 2022-11-29
updated: 2022-11-29
layout: layouts/article.njk
tags:
  - content
  - articles
  - javascript
permalink: articles/vue-linting.html
---
When [adding linting](./linting.html) to a Vue project you may run into some issues such as  `Parsing error: Unexpected token <` which is how templates are created. To solve this we can add [eslint-plugin-vue](https://eslint.vuejs.org/)

## Installation

```bash
yarn add -D eslint eslint-plugin-vue vue-eslint-parser
```

## Setup

In the `.eslintrc.json` add the vue3 plugin and set parser to vue. I removed airbnb extension as I think it requires some react stuff that is not needed ina Vue project. 

```json
{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "vue",
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

### `package.json`

Add the linting option that can be used in a build step later on

```json
"scripts": {
	...
	"lint": "eslint src --ext .vue"
},
```