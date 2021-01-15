---
title: First Unique Character in a String
description: Solution to the Leetcode problem of finding the first unique character in a string.
date: 2021-01-15
updated: 2021-01-15
layout: layouts/article.njk
tags:
  - content
  - articles
  - javascript
  - leetcode
  - problems
navtitle: First Unique Character in a String
permalink: articles/first-unique-char.html
---

## The problem

The definition for [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) is *Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1*. This has an easy rating on [Leetcode](https://leetcode.com/problems/first-unique-character-in-a-string/) although I must say I as usual complicated things before finding a cool solution from [Terrible Whiteboard](https://youtu.be/21LDcomZ1as) on YouTube. My original thought was to convert to an array and then remove each found character in the array. This led me into loops of trying to find matching and non matching values and eventually a deadend. I knew that I was missing something simple and this is where the video showed me I was thinking about is in the opposite direction. Instead of removing I should be creating a map of each character and the number of times they occurred. The return should be the first character which a occurrence of 1.

```
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const occurrence = {};
  
  for (let char of s) {
    if (occurrence[char] === undefined) {
      occurrence[char] = 1;
    } else {
      occurrence[char]++;
    }
  }
  for(let i=0;i<s.length;i++){
    const char = s.charAt(i);
    if (occurrence[char]===1) return i;
  }
  return -1;
};
```

## What I learnt

1. I can create a mapping of the characters and add to them. A cool use of an object and actually I have heard about Maps in Javascript and wondering whether they couldn't be used here.
2. I can loop through a string using `for (let char of s)`. I was unaware of this cool little String trick. Another reason why doing these short problems can lead to learning a small trick to add to the quiver of js arrows.
3. Another cool String trick (I really should go over the API) is `charAt`. So I can actually extract and extract a character using the same sort of index like an Array.