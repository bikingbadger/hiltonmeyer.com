---
title: Setup ingredients
description: Setup routing and some views for adding ingredients to the database
date: 2021-02-15
updated: 2021-02-15
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Setup ingredients
permalink: articles/series/pantry/3-ingredients.html
---
## Change About

In order to add ingredients we'll need a form, I'm thinking that with this form I should be able to setup a shopping list as a first milestone for the project. There is an about page that I'm not really sure that I'll be using so instead of deleting it I'll re-purpose it for the form to add ingredients and show the current list of ingredients. 

## App.vue

In `App.vue` I change the router-link from

```
<router-link to="/about">About</router-link>
```

to

```
<router-link to="/ingredients">Ingredients</router-link>
```

## Router

Next thing is setting the router so again I change the `router/index.js` from

```
{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}
```

to 

```
{
    path: '/ingredients',
    name: 'Ingredients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingredients.vue')
}
```

## Ingredient Form

For now I just want the layout of the form for being able to show a list of ingredients and the ability to add ingredients that are missing.

```
<template>
  <div class="ingredient">
    <div class="add-ingredient-frm">
      <div>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label for="category">Category:</label>
        <select id="category" name="category">
          <option value="legumes">Legumes</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruit">Fruit</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>
      <div><button>Add</button></div>
    </div>
    <ul>
      <li>Milk</li>
      <li>Whole wheat flour</li>
      <li>Olive Oil</li>
    </ul>
  </div>
</template>
```

## Next steps

The next thing that I want to do is be able to add an ingredient and save it to a database and the other would be to show those ingredients on the list. After that a search feature would be cool and then being able to add the ingredients to a shopping list which will already have the first milestone and allow me to start using the app for my weekly shopping.