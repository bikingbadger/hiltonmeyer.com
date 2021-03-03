---
title: Register form
description: Save our state in a Vuex store
date: 2021-03-18
updated: 2021-03-18
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Register form
series: Vue Full Application Build
permalink: articles/series/pantry/8-register-form.html
---
*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/8-register-form)*

This is a continuation from the registration functionality that I [setup up in Vuex](/articles/series/pantry/7-auth-register.html). This post will now create a simple form for registering the user in firebase using that function.

`src/views/Register.vue`

```
<template>
  <div>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" v-model="username" />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />
  </div>
  <button @click="registerUser">Register</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['register']),
    registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.register(userData);
    },
  },
};
</script>
```

Other than the standard Vue features I'm using there is a cool little use of the spread operator and one of Vuex's best features. Instead of having to have to try and traverse the context and state I use `mapActions`. This is then added to the methods and I can use is as a normal method in the file. Pretty cool. This will register the user and on success re-direct the user back to the homepage.
