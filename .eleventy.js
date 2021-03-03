const { DateTime } = require('luxon');
const pluginRss = require('@11ty/eleventy-plugin-rss'); // Plugin for RSS in 11ty

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');

  /******************* Filters ************************/
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat('dd LLL yyyy');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter('currentContent', (articles, sortOrder = 'desc') => {
    console.log(sortOrder);
    const currentDate = new Date();

    articles.sort((a, b) => a.data.updated - b.data.updated);

    let currentContent = articles.filter((article) => {
      // console.log(article.data.title, article.data.date, article.data.updated);
      return (article.data.updated || article.data.date) < currentDate;
    });
    return sortOrder === 'desc' ? currentContent.reverse() : currentContent;
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat('yyyy-LL-dd');
  });

  /**************** Markdown Plugins********************/
  let markdownIt = require('markdown-it');
  var markdownItAttrs = require('markdown-it-attrs');
  let markdownItAnchor = require('markdown-it-anchor');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let optsAnchor = {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
  };
  let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItAnchor, optsAnchor);
  eleventyConfig.setLibrary('md', markdownLib);
  /**************** END Markdown Plugins********************/

  /**************** RSS Plugins********************/
  eleventyConfig.addPlugin(pluginRss);
  /**************** END RSS Plugins********************/

  return {
    passthroughFileCopy: true,
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
