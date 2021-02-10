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
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap');

:root {
  --ff-sans: 'IBM Plex Sans', sans-serif;
  --ff-serif: 'IBM Plex Serif', serif;

  /* mobile first */
  --fs-200: 0.5rem;
  --fs-300: 1rem;
  --fs-400: 1.2rem;
  --fs-500: 1.6rem;
  --fs-600: 1.8rem;
  --fs-700: 2.4rem;
  --fs-900: 3.2rem;

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

  --lh-heading: 3.5rem;
  --lh-text: 2.4rem;
}

/* Reset */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
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

ul[class],
ol[class] {
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
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
  font-family: var(--ff-sans);
  font-size: var(--fs-500);
}

/* Typography */

h1,
h2,
h3 {
  font-family: var(--ff-serif);
  font-weight: var(--fw-200);
}

h1,
.h1 {
  font-size: var(--fs-900);
  --lh-heading: calc(var(--fs-900) * 1.1);
}

h2,
.h2 {
  font-size: var(--fs-700);
  --lh-heading: calc(var(--fs-700) * 1.1);
}

h3,
.h3 {
  font-size: var(--fs-600);
  --lh-heading: calc(var(--fs-600) * 1.1);
}

/* Layout */

.container {
  max-width: 85ch;
  margin: 0 auto;
}

/* Responsive */

@media (min-width: 640px) {
  :root {
    --fs-200: 0.5rem;
    --fs-300: 1rem;
    --fs-400: 1.6rem;
    --fs-500: 1.8rem;
    --fs-600: 2.4rem;
    --fs-700: 3.2rem;
    --fs-900: 4.8rem;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}

@media (min-width: 1280px) {
```