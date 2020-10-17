---
title: Add Testing to Existing Vue Project
description: After a Vue project is up and running or on older project you want to add testing. This is how I went about it using vue-cli 
date: 2020-10-20
updated: 2020-10-20
layout: layouts/article.njk
tags:
  - content
  - articles
  - vue
  - testing
navtitle: Add Testing to Existing Vue Project
permalink: articles/add-vue-testing-to-existing.html
---
I've been intrigued to learn Vue and have tried to get Vue under my belt after going through the vanilla javascript course and now feeling comfortable writing javascript and actually looking at it and understanding more or less what is going on in the code. I have also been hearing about test driven development so thought that if I'm in for a penny then might as well be in for a pound. So my project is to get a shopping list setup based on recipes I have and also keep an inventory of stuff I have in the pantry. So I will document how I get it all put together and hopefully help anyone who is looking to get a project started using Vue and then advancing the getting started project on to something more substantial which is where things normally drop off on other tutorials I see online.

So having the project already started which in hindsight I should document but as this is adding to an existing project I guess this will be the starting point. Using the vue-cli you can add testing to a project as follows:

```bash
vue add @vue/unit-jest
```

That will add the testing suite to your project and even include an example of a test. My one change to it was in the `package.json` file scripts to add watch to the testing script so that I don't have to run it every time but it rather act's as a runner. 

```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit --watch",
    "lint": "vue-cli-service lint"
  },
  ```

Now when using VS Code I have a split terminal. One running the `serve` script and the other running `test:unit`. I might even delete the `:unit` for now as this project might only use unit tests. 