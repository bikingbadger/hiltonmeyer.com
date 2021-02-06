---
title: CSS Reset
description: A file for getting started on CSS projects
date: 2021-02-06
updated: 2021-02-06
layout: layouts/article.njk
tags:
  - content
  - articles
  - css
navtitle: CSS Reset
permalink: articles/css-reset.html
---
After doing a the [CSS Demystified](https://cssdemystified.com/) CSS course of [Kevin Powel](https://www.kevinpowell.co/) I left with a much better understanding of CSS although far from where I want to be and coming from a development side of thigs my design chops need some serious work. At the moment I love [Tailwind](https://tailwindcss.com/) although more and more lately [WaterCSS](https://watercss.kognise.dev/) drop in stylesheet. But for me to start working and learning I'll have to start working on CSS and not depending on others. The base is where everything starts off with so I will use this as a page that I will come back to as I build out my CSS reset for projects.

```css
:root {
  --ff-sans: 'IBM Plex Sans', sans-serif;
  --ff-serif: 'IBM Plex Serif', serif;

  /* small screen font-sizes */
  --fs-200: 0.75rem;
  --fs-300: 1rem;
  --fs-400: 1.25rem;
  --fs-500: 1.375rem;
  --fs-600: 1.75rem;
  --fs-900: 2.125rem;

  --fw-200: 200;
  --fw-300: 300;
  --fw-400: 400;
  --fw-700: 700;

  --clr-neutral-100: #fff;
  --clr-neutral-200: #eef1f6;
  --clr-neutral-300: #a9afbc;
  --clr-neutral-400: #737b8c;
  --clr-neutral-500: #434956;
  --clr-neutral-900: #020203;

  --clr-primary-300: #f3f7ff;
  --clr-primary-400: #8ea8da;

  --br: 1rem;

  --lh-heading: 1rem;
  --lh-text: 1.5rem;
}

/* Reset */

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
.h1,
.h2,
.h3,
.h4 {
  line-height: var(--lh-heading);
}

* {
  margin: 0;
  padding: 0;
}

ul[class],
ol[class] {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Layout */

body {
  padding: 1rem;
  line-height: var(--lh-text);
}
```