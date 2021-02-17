---
title: Customize Bullet Style
description: How to customize a bullet with ::marker
date: 2021-02-17
updated: 2021-02-17
layout: layouts/article.njk
tags:
  - content
  - articles
  - css
navtitle: Sticky Headings
permalink: articles/custom-bullet-style.html
---
A quick way to customize a bullet style instead of having to use `:before` and content or twisting yourself in knot's.

```
li::marker {
  font-size: 150%;
  font-weight: bold;
  color: lightgreen;
}

li::marker {
  font-size: 0.7em;
  color: fuchsia;
}
```