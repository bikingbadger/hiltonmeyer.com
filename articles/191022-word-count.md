---
title: Word Counter
description: Showing the running counter of words in a textfield
date: 2019-10-22
updated: 2019-10-22
layout: layouts/article.njk
tags:
  - content
  - articles
  - vanillajs
  - vanillajsacademy
navtitle: Word Counter
permalink: articles/word-counter.html
---

[Yesterday](/articles/character-counter.html) I had to figure out the number of characters in a text field that is being written into. Today in the [Vanilla JS Academy](https://vanillajsacademy.com) we had to add a word counter to the calculation. We learnt more about arrays and the `split` and `filter` methods. The split method will take in a string and convert that into an array according to what you identify as the separator. In my case this was simple breaking up each word by space so this gave me the word count or at least this is what I thought. The split also breaks on multiple spaces so you end up with an array of empty values if there are extra spaces.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Word Count</title>
  </head>

  <body>
    <h2>Word Count</h2>

    <label for="text">Enter your text below.</label>
    <textarea id="text"></textarea>

    <p>
      You've written
      <strong
        ><span id="word-count">0</span> word<span id="wordPlural"
          >s</span
        ></strong
      >
      and
      <strong
        ><span id="character-count">0</span> character<span id="charPlural"
          >s</span
        ></strong
      >.
    </p>

    <script src="script.js"></script>
  </body>
</html>
```

This is were the filter method of the array comes into play. I used that to remove the empty values in the array for the correct word count. [Yesterday](/articles/character-counter.html) I had used the `textLength` to get the character count but after seeing the solution offered by [Chris Ferdinandi](https://gomakethings.com/) I converted today's answer to try and use the element `.value` which I could then do `.length` to get the number. I could use this for both the character count as well as the word count.

```js
"use strict";

const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");
const text = document.querySelector("#text");
const charPlural = document.querySelector("#charPlural");
const wordPlural = document.querySelector("#wordPlural");

const getCharacterCount = () => {
  return text.value.length;
};

const getWordCount = () => {
  const numWords = text.value.split(" ").filter(item => {
    return item != "";
  });
  return numWords.length;
};

const setPlural = () => {
  wordPlural.style.visibility = getWordCount() === 1 ? "hidden" : "visible";
  charPlural.style.visibility =
    getCharacterCount() === 1 ? "hidden" : "visible";
};

const setCounts = () => {
  wordCount.textContent = getWordCount();
  characterCount.textContent = getCharacterCount();
  setPlural();
};

window.addEventListener(
  "input",
  event => {
    if (event.target.matches("#text")) {
      setCounts();
    }
  },
  false,
);

setCounts();
```

As a bonus I didn't want to leave the plural of _word_ and _character_ as is so I did a little bit of style manipulation using a `<span>s</span>` so that I would hide the 's' if the value was equal to 1. That way I could leave it as is and only show the 's' when required.

[View the code in action](https://bikingbadger.github.io/vanilla-academy/projects/word-count/)
