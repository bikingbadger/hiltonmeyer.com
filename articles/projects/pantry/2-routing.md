---
title: Routing using Vue Router
description: Setup routing and some views for adding ingredients to the database
date: 2021-02-08
updated: 2021-02-08
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Routing using Vue Router
series: Vue Full Application Build
permalink: articles/projects/pantry/2-routing.html
---

### Setting up Vue Router

After the [initial setup](/articles/series/pantry/1-setup.html) in the previous post. One of the first things I want to to is add routing so that I will be able to create the navigation required to be able to get to all the views in the application. [Vue Router](https://router.vuejs.org/) is the official router for Vue and makes things super simple to setup although based on the current setup and in hindsight I could of simply added the routing in the setup but I prefer to do it this was to keep things simple. A simple command will not only setup the routing but the scaffolding of the views and the routing directories which is pretty awesome.

```
vue add router
```

![directory layout](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_auto,dpr_auto/v1611684947/hiltonmeyer.com/vue-router_kohdax.jpg)

As you can see with this command we have routing setup and ready to go although there'll be errors now as it tries to add the hello world example from the vue install. So in the `views/Home.vue` file set the `<template>` as follows

```html
<template>
  <div class="home">
    <img
      alt="App logo"
      src="https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1611488325/pantry/cooking-robot_xdaw7k.png"
    />
    <h1>Pantry</h1>
    <h2>Kitchen Manager</h2>
  </div>
</template>
```

I also made a view small tweaks in the `App.vue` file to get the color scheme going although this may need to be placed somewhere else, but for now I've changed the `<style>` to this

```css
<style>
:root {
  --clr-neutral-500: #2c3e50;

  --clr-accent-500: #00b8f0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--clr-neutral-500);
}

#nav {
  padding: 30px;
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

So after the routing we have an application that looks like this which I think isn't that bad after what is basically two commands

![Current Layout](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_auto,dpr_auto/v1611685840/hiltonmeyer.com/pantry-003_akawbz.jpg)