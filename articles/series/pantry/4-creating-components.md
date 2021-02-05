---
title: Creating components
description: Creating a components directory for breaking up code into manageable chunks
date: 2021-02-18
updated: 2021-02-18
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Creating components
series: Vue Full Application Build
permalink: articles/series/pantry/5-components.html
---

Things are going to start increasing in size and one of the cool things about Vue is using components. So the first thing I want to do is create a directory in `src` called `components/ingredient`, this will be where I add all my ingredient related components. This is just the way that I've decided to go but you could have something else or a different layout. Again I'm learning as I go along here and trying to share that with you as I pick up new things or better ways of doing things. If all goes according to plan I would come back and update these files not with the correct way but rather a link to the new way of doing it. I still want others to see the process which I find sometimes missing in these polished tutorials.

```
mkdir src/components/ingredient
touch src/components/ingredient/AddIngredient.vue
```

With this done I create a file called `AddIngredient.vue` and add what we previously did [setting up the ingredient](/articles/series/pantry/3-ingredients.html) view cut that all out and paste it into the new file.


*AddIngredient.vue*

```js
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
      <div>
        <label for="uom">Unit of Measure:</label>
        <input type="text" name="uom" id="uom" />
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

In `Ingredients.vue` in the `views` directory we import the newly created component and add it to the view we're using. This will get us back to where we were in the begining but with the added benefit of having broken up the code a bit and starting to use components.


*Ingredients.vue*

```js
<template>
  <add-ingredient></add-ingredient>
</template>

<script>
import AddIngredient from '@/components/ingredient/AddIngredient.vue';

export default {
  components: { AddIngredient },
};
</script>

<style></style>
```
