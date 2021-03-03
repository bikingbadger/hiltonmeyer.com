---
title: Register user to firebase
description: Save our state in a Vuex store
date: 2021-03-11
updated: 2021-03-11
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Register user to firebase
series: Vue Full Application Build
permalink: articles/series/pantry/7-auth-register.html
---
*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/7-auth-register)*

## Organise Firebase

After previously setting up firebase and vuex I want to organise things a bit better and then add login and registration of users. So first I extract the firebase setup to a separate file, this enables me to use it in other parts of the app and then to also import this into main and use it in the app.

`firebase.js`

```js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbYPvxMaECPwjgR06njRfTLFa_skZ9-Qo',
  authDomain: 'pantry-fe77c.firebaseapp.com',
  databaseURL: 'https://pantry-fe77c-default-rtdb.firebaseio.com',
  projectId: 'pantry-fe77c',
  storageBucket: 'pantry-fe77c.appspot.com',
  messagingSenderId: '235929136377',
  appId: '1:235929136377:web:f4687227f50dc7bd76c628',
  measurementId: 'G-7J6VBCW3SE',
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
```

You'll notice that I also added the `auth` package to the import so that we can use this feature too as well as the `firestore` so that we can save data later. I like to also setup and user table when registering so that in the future settings on the user can be saved there.

`main.js`

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './firebase.js';

let app;

firebase.authDomain().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(firebase);
    app.use(store);
    app.use(router);

    app.mount('#app');
  }
});
```

The `main.js` file is cleaned up and I import the firebase settings.

## Register Action and Mutation

Let's setup the registration option now and then connect it to a register form. First thing is to add state to the module of the extra user information that we want to save for now.

`authIndex.js`

```
import authActions from './authActions.js';
import authMutations from './authMutations';
import authGetters from './authGetters';

export default {
  namespaced: true,
  state() {
    return {
      id: 0,
      username: '',
      email: '',
      registrationError: false,
      errorMsg: '',
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
```

Now for the action that does the asynchronous calls before passing on the data to the mutation that does the work to save the state. This separation of concerns help to keep state valid and consistent.

`authActions.js`

```js
import firebase from '@/firebase.js';

const userRef = firebase.firestore().collection('/user');

export default {
  async register({ commit }, user) {
    try {
      // Register user using email and password
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
};
```

This user is first created using firebase auth so that we can get the user token for future validation. The next step is to then take that user and save it with the extra data. Once done we can send the data to the mutation using `commit` or if there is an error we again send the error along to the mutation for later showing the error.

`authMutations.js`

```
import router from '@/router';

export default {
  authSuccess(state, user) {
    console.log(state, user);
    state.email = user.email;
    state.username = user.username;
    state.registrationError = false;
    state.errorMsg = '';
    router.push({ path: 'home' });
  },
  authFail(state, error) {
    state.registrationError = true;
    state.errorMsg = error.message;
  },
};
```

With that we have the registration functionality setup. In the next post I'll create a registration form and hook that up to the vuex store.