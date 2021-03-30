---
title: Login form
navtitle: Login form
description: Create login form for the user auth
date: 2021-04-08
updated: 2021-04-08
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
series: Vue Full Application Build
permalink: articles/series/pantry/10-login-form.html
---

*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/10-login-form)*

This form is pretty much the same as the [registration form](/articles/series/pantry/8-register-form.html) so could be am interesting to look at using slots and refactoring the form. But as it stands I just want to get the login working so that I can start adding ingredients and at least creating a shopping list which would be the first milestone. 

*views/Login.vue*

```js
<template>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />
  </div>
  <button @click="loginUser">Login</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    loginUser() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      this.login(userData);
    },
  },
};
</script>
```

### Header component

Lets connect that up with some navigation and show when the user is actually logged in. the first thing is to extract the header into a separate component that will make changes easier and keep the main `App.vue` file cleaner. I created a file in a new directory under components, `components/ui/TheHeader.vue`. This naming is in line with the style guide of naming components using multiple words and using *The* for components that will only be used once. Read more about this guideline in the [Vue Style Guide](https://v3.vuejs.org/style-guide/#multi-word-component-names-essential)


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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
};
</script>
```

### Routing

To get the router links working and also to show whether the user in logged in I added the login view to the vue router setup and also added another bit of state to vuex as you can see in the below files. 

*router/index.js*

```
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
```

### Store

This takes care of showing the form when the button is clicked for either the register or the login button is pressed. For keen eye's I have already added the logout button although that currently does nothing and we'll handle that in an upcoming article. The next step is to show various links and buttons based on whether the user is logged in or not. I used the `mapGetters` method of loading the getters of the vuex state which we add as follows.

`store/auth/authMutations.js` I added `isLoggedIn` state

*store/auth/authMutations.js*

```
import router from '@/router';

export default {
  authSuccess(state, user) {
    console.log(state, user);
    state.email = user.email;
    state.username = user.username;
    state.registrationError = false;
    state.isLoggedIn = true;
    state.errorMsg = '';
    router.push({ path: 'home' });
  },
  authFail(state, error) {
    state.registrationError = true;
    state.isLoggedIn = true;
    state.errorMsg = error.message;
  },
};
```

`store/auth/authIndex.js` I added `isLoggedIn` state and set it to `false` by default

*store/auth/authIndex.js*

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
      isLoggedIn: false,
      errorMsg: '',
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
```

`store/auth/authGetters.js` returns the `isLoggedIn` state

*store/auth/authGetters.js*

```
export default {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
};
```

### Using the new component

With this new state in place and the component extracted this leaves the `App.vue` file needing to import and use the component

*App.vue*

```
<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from '@/components/ui/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
:root {
  --clr-neutral-500: #2c3e50;

  --clr-accent-500: #00b8f0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--clr-neutral-500);
}

img {
  display: block;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: var(--clr-neutral-500);
}

#nav a.router-link-exact-active {
  color: var(--clr-accent-500);
}
</style>
```

With that the auth is almost complete. The next step will be to add a logout functionality.