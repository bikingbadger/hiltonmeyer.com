const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  /******************* Filters ************************/
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("dd LLL yyyy");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("currentContent", articles => {
    const currentDate = new Date();
    
    let currentContent = articles.reverse().filter((article) =>{       
      return article.data.date < currentDate;
    }); 

    return currentContent;
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yyyy-LL-dd");
  });

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require("markdown-it-attrs");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let optsAnchor = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  };
  let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItAnchor, optsAnchor);
  eleventyConfig.setLibrary("md", markdownLib);
  /**************** END Markdown Plugins********************/

  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
