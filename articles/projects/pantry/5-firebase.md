---
title: Setup Firebase
description: Setting up Firebase project to use for auth and database
date: 2021-02-25
updated: 2021-02-25
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Setup Firebase
series: Vue Full Application Build
permalink: articles/projects/pantry/4-firebase.html
---
*Code for this can be found in the [Github Branch](https://github.com/bikingbadger/pantry/tree/5-firebase)*

There is a bit of a chicken or the egg situation now. I guess I could start with getting my state managed in Vuex setup first although I prefer to get the DB setup so that I can use it. I'm going for [Firebase](https://console.firebase.google.com/) to give me a quick solution for setting up a database and also later adding auth in one place. So let's go ahead and install and initialize firebase

## Setup

The first thing is going over to Firebase console and setting up a new project. Once done you want to add the new application that you want to give access to your Firebase project. Select Project Overview and then select `+Add app`  and select web app

![Add App](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_auto,dpr_auto/v1612524026/hiltonmeyer.com/pantry-005_vwachm.jpg)

![Web App](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_auto,dpr_auto/v1612524026/hiltonmeyer.com/pantry-006_mxbdpt.jpg)

After that you give the application a name and it will create the app and provide the SDK config required when initializing the app. Save that data and we'll add it to the `main.js` file soon to get things up and running with Firebase initialized. 

![App name](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1612524026/hiltonmeyer.com/pantry-007_jbre2z.jpg)

![Config](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1612524026/hiltonmeyer.com/pantry-008_skrqrn.jpg)


Installing Firebase SDK with NPM is done as follows

```
npm install firebase
```

Once installed in my main file I will initialize Firebase using the config file created for this app.

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDbYPvxMaECPwjgR06njRfTLFa_skZ9-Qo',
  authDomain: 'pantry-fe77c.firebaseapp.com',
  databaseURL: 'https://pantry-fe77c-default-rtdb.firebaseio.com',
  projectId: 'pantry-fe77c',
  storageBucket: 'pantry-fe77c.appspot.com',
  messagingSenderId: '235929136377',
  appId: '1:235929136377:web:23a498fc887466ce76c628',
  measurementId: 'G-S4ER2JYTKZ',
};
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount('#app');
```

With this we can now use firebase in the application. So let's add a method for getting and posting the ingredients to the DB

