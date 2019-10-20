---
title: Character Counter
description: Showing the running counter text length of a textfield
date: 2019-10-20
updated: 2019-10-20
layout: layouts/article.njk
tags: 
 - content
 - articles
 - vanillajs
 - vanillajsacademy
navtitle: Character Counter
permalink: articles/character-counter.html
---
I'm really enjoying [Vanilla JS Academy](https://vanillajsacademy.com) because the projects are short and sweet but they all seem to have some real world application. So we are learning some important methods along the way but then we have to go off and apply them in an interesting way. The community around this course is also so great so I can only take my hat off to [Chris Ferdinandi](https://gomakethings.com/). Today we had to create a character counter like you might see on some sites under a text box. Possibly applications is indicating that there is a maximum number of characters in a textarea. 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Character Count</title>
</head>

<body>
    <h2>Character Count</h2>

    <label for="text">Enter your text below.</label>
    <textarea id="text"></textarea>

    <p>You've written <strong><span id="character-count">0</span> characters</strong>.</p>

    <script src="script.js"></script>
</body>

</html>
```
This is some very basic html and the javascript was also pretty simple to find a solution for. The event was my only catch. I initially was using keyup but after posting the solution on the Slack channel I saw others using `input` as their event. After some checking I found that the mouse copy paste did not trigger the event from happening. So I made this change and I was able to set the counter as I was typing in or doing some form of copy paste.

```js
const characterCount = document.querySelector('#character-count');

window.addEventListener(
    "keyup",
    event => {event.target.matches('#text') ? characterCount.textContent = event.target.textLength : 0;},
    false,
);

characterCount.textContent = document.querySelector('#text').textLength;  
```

See it in [action](https://bikingbadger.github.io/vanilla-academy/projects/character-count/)