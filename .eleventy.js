module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let optsAnchor = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };
  let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItAnchor, optsAnchor);
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