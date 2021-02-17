---
title: Sticky Headings
description: How to make headings stick to the top of the screen while you scroll
date: 2021-02-13
updated: 2021-02-13
layout: layouts/article.njk
tags:
  - content
  - articles
  - css
navtitle: Sticky Headings
permalink: articles/sticky-heading.html
---
Came across a great [article](https://christianheilmann.com/2021/02/09/using-position-sticky-to-create-persistent-headers-in-long-texts/) showing how to create a sticky heading. Really simple and love little additions like this that don't require a ton of changes and can be added as some sparkles to tweak the site. Probably not useful in every site but I must say that they are in something like a blog where you're creating content or tutorials and have the heading still showing.

```
/* Create stick headings */
h1,
h2,
h3,
h4 {
  letter-spacing: -1px;
  position: sticky;
  top: 0;
  background: var(--background);
  padding: 0.5em 0;
}
```