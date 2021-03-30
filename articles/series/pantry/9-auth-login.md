---
title: Login user using firebase
navtitle: Login user using firebase
description: Create login functionality for a user
date: 2021-04-01
updated: 2021-04-01
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
series: Vue Full Application Build
permalink: articles/series/pantry/9-auth-login.html
---

*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/9-auth-login)*

In the vuex [auth store](/articles/series/pantry/7-auth-register.html) all that needs to be done is add the login functionality. The great thing about using actions for asynchronous functions and let the mutations handle the state changes is as you can see in this case the mutation is the same whether the user registered or logged in for both success or failure. So firebase does all the heavy lifting of handling the auth which is a world unto its own and we just manage the state using Vuex. The application will then reflect the current state. 

```js
import firebase from '@/firebase.js';

const userRef = firebase.firestore().collection('/user');

export default {
  async register({ commit }, user) {
    try {
      // Register user
      const registered = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log(registered);

      // Create userdata
      const userData = {
        id: registered.user.uid,
        username: user.username,
        email: user.email,
      };

      // Save user to DB
      const createUser = await userRef.add(userData);
      commit('authSuccess', createUser);
    } catch (err) {
      commit('authFail', err);
    }
  },
  async login({ commit }, user) {
    try {
      const loggedIn = await firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);
      console.log(loggedIn);

      const userData = {
        id: loggedIn.user.uid,
        username: user.username,
        email: user.email,
      };

      commit('authSuccess', userData);
    } catch (err) {
      commit('authFail', err);
    }
  },
};
```

The next step will be to add a login form similar to the [registration form](/articles/series/pantry/8-register-form.html) and then start creating checks on the routing.