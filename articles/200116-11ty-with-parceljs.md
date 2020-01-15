---
title: Using 11ty with Parcel
description: How to use 11ty to generate content and ParcelJS for bundling JavaScript
date: 2020-01-15
updated: 2020-01-15
layout: layouts/article.njk
tags: 
 - content
 - articles
 - parcel
 - 11ty
navtitle: Using 11ty with Parcel
permalink: articles/11ty-with-parcel.html
---

Being a big fan of 11ty and having setup [ParcelJS yesterday](/articles/character-counter.html) for my [100 days of Code Challenge](https://100days100projects.netlify.com/) I wanted to see if I could get the two to work together as I would then have the benefits of templating and static generation from 11ty and the bundling from ParcelJS. Seems like a win win situation and a quick search brought up a great article by [Marl Clevenger](https://cloudsh.com/eleventy/eleventy_and_parceljs_working_together.html). He had a more advanced requirement so I went about trying to simplify it for my needs of just having the bundling done by ParcelJS.

First thing was to install 11ty and then also npm-run-all for the development process.

```
npm install -D @11ty/eleventy npm-run-all
```

Once installed I didn't do any major 11ty configuration. My .eleventy.js file looked as follows:
```
module.exports = function (eleventyConfig) {
  
    // You can return your Config object (optional).
    return {
      dir: {
        input: 'src',
        output: "dist"
      },
      templateFormats: [
        'html',
        'md',
        'njk'
      ],
      passthroughFileCopy: true
    }
  }
```
My setup basically just pointed the output to dist which is the default for ParcelJS so figured it would be easier to handle that way. With this the html files, which I will convert to markdown along with some templates, are passed directly through to the `dist` folder. So far so good and setting me up to be able to start writing everything in markdown files and using some sort of common css and headers. 11ty really is a dream to setup.

Now for the ParcelJS that I had already implemented on my project. I wanted to take all the assets and bundle those, again thinking of the future where I can start splitting code into files and then bringing it all together in the end. Very much still keeping things as VanillaJS as possible. For this I changed the scripts of my `package.json`:
```
"scripts": {
    "dev": "npm-run-all --parallel bundle:*",
    "bundle:eleventy": "eleventy --serve --quiet",
    "bundle:parcel": "parcel src/**/sounds/* src/**/*.js src/**/*.css",
    "build": "run-s prod:*",
    "prod:eleventy": "eleventy",
    "prod:parcel": "parcel build src/**/sounds/* src/**/*.js src/**/*.css"
},
```
Let's run through what it does.
* `bundle:eleventy`: This is the eleventy part of the build. It will build all the markdown and create the dist directory containing all the static markup files. It will update with the changes I make to any markdown files.
* `bundle:parcel`: Based on my file structure in src, I bundle all the css, javascript and sounds. I should also add images to this.
* `dev`: This just runs the above in parallel allowing my to develop my applications and still have everything working together.
* `prod:eleventy`: Build the eleventy files.
* `prod:parcel`: Bundle the assets
* `build`: Using npm-run-all in runs each `prod:eleventy` and then `prod:parcel` in sequence.

With this change I had everything working together without having to make any huge changes to my process. I did not have to rename any files and used the fact that 11ty does not copy javascript file by default or css for that fact.
