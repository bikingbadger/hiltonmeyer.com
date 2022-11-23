---
title: Add Vuex
description: Save our state in a Vuex store
date: 2021-03-04
updated: 2021-03-04
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Add Vuex
series: Vue Full Application Build
permalink: articles/projects/pantry/5-vuex.html
---
*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/6-vuex)*

This is a short one but will lay the foundation for saving ingredients, recipes and any other state of the app.

```
vue add vuex
```

Once the package has been installed you should see a new folder called `store` under `src`. In `main.js` the file will also be imported and used by the App. I like to break my modules up in separate folders that hold each store and I name space them but more of this shortly. In the store directory I create a new folder called `auth`. Within this folder I have 4 files

- authIndex.js
- authActions.js
- authMutation.js
- authGetters.js

This is probably huge overkill for now but later on and as the project grows it just makes it easier to handle. For now the only files I'll flesh out in `authIndex.js`

```js
import authActions from './authActions.js';
import authMutations from './authMutations';
import authGetters from './authGetters';

export default {
  namespaced: true,
  state: {},
  mutations: {
    authMutations,
  },
  actions: {
    authActions,
  },
  getters: {
    authGetters,
  },
};
```
And then import the module into the `store/index.js`

```js
import { createStore } from 'vuex';

import authModule from './auth/authIndex';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth: authModule },
});
```

The skeleton of the store is ready for handling the next thing to tackle which is login and registration of a user. That way we can manage the router paths of what users can do while logged in and also what they can only read when not.