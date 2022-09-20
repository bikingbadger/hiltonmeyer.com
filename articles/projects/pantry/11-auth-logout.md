---
title: Logout User
navtitle: Logout User
description: Create logout functionality for a user
date: 2021-04-15
updated: 2021-04-15
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
series: Vue Full Application Build
permalink: articles/projects/pantry/11-auth-logout.html
---

*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/11-auth-logout)*

The final step in wrapping up auth before getting back to the [ingredients](articles/series/pantry/3-ingredients.html) form is being able to log a user out of the application. Again firebase does the heavy lifting and all we need to do is make sure our state is updated.

### Store

The store needs to be refactored and updated after I noticed a few issues. The first is that the user details can be stored as an Object for easier use in the app called `currentUser`. 

*store/auth/authIndex.js*

```js
import authActions from './authActions.js';
import authMutations from './authMutations';
import authGetters from './authGetters';

export default {
  namespaced: true,
  state() {
    return {
      currentUser: { id: 0, username: '', email: '' },
      registrationError: false,
      isLoggedIn: false,
      errorMsg: '',
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
```

Below you can see the use of firebase to sign out the user from the system. The snippet below is without the full code for register and login. Take a look at the repo for full code.

*store/auth/authActions.js*

```
import firebase from '@/firebase.js';

const userRef = firebase.firestore().collection('/user');

export default {
  async register({ commit }, user) {
    ...
  },
  async login({ commit }, user) {
    ...
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit('logout');
  },
};
```

Our mutation now has to update the state of the user being logged out. I also refactor the currentUser data in both the `logout` and `authSuccess`.

*store/auth/authMutations.js*

```
import router from '@/router';

export default {
  authSuccess(state, user) {
    state.currentUser.id = user.uid;
    state.currentUser.email = user.email;
    state.currentUser.username = user.username;
    state.registrationError = false;
    state.isLoggedIn = true;
    state.errorMsg = '';
    router.push({ name: 'home' });
  },
  authFail(state, error) {
    state.registrationError = true;
    state.isLoggedIn = false;
    state.errorMsg = error.message;
  },
  logout(state) {
    state.isLoggedIn = false;
    state.currentUser.id = null;
    state.currentUser.email = null;
    state.currentUser.username = null;
    router.replace({ name: 'home' });
  },
};
```

### Implement

With this done we complete the logout functionality and now just need to use the action after clicking the button.

*components/ui/TheHeader.vue*

```
<template>
  <img
    alt="App logo"
    src="https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1611488325/pantry/cooking-robot_xdaw7k.png"
  />
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-if="isLoggedIn" to="/ingredients"> Ingredients</router-link>
  </div>
  <div id="auth">
    <router-link v-if="!isLoggedIn" to="/login" tag="button">
      <button>Login</button>
    </router-link>
    <router-link v-if="!isLoggedIn" to="/register">
      <button>Register</button>
    </router-link>
    <button v-if="isLoggedIn" @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>
```