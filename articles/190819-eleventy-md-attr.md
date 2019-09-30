---
title: Eleventy Markdown Attributes
description: Adding Attributes to Markdown using Eleventy
date: 2019-08-19
updated: 2019-08-19
layout: layouts/article.njk
tags: 
 - articles
 - eleventy
 - markdown
navtitle: Eleventy Markdown Attributes
---

I searched for a way to try and add attributes, such as class or id to markdown for a while. Using [11ty](https://www.11ty.io) as my static site generator I've been using Nunjucks for templating and was able to add attributes in the that way. I was sure there must be a way of doing the same thing in Markdown. Luckily 11ty comes with a way of adding your own [library instance](https://www.11ty.io/docs/languages/markdown/#optional%3A-set-your-own-library-instance) to Markdown. The example show's how to use emoji plugin but I found [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs) plugin which suited my purpose. This is basically how I went about adding it to my project.

**Install libraries**{.article-heading}
```
npm install --save-dev markdown-it markdown-it-attrs
```
These will give the required libraries for adding to the project and add them to the package.json

**Setup library instance** {.article-heading}
Now we want to add the libraries for eleventy to pickup

*.eleventy.js*
```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }

  };
  /**************** END Markdown Plugins********************/
  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }

  };
};
```

**Example of Usage** {.article-heading}

*example.md*
```
---
title: Template
layout: layouts/base.njk
tags:
    - post    
navtitle: Template
date: 2019-09-05
---
# header {.style-me}
paragraph {data-toggle=modal}

another bit of data {.class #identifier attr=value attr2="spaced value"} 
```