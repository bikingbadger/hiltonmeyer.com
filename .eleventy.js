module.exports = function(eleventyConfig)  {
    eleventyConfig.addPassthroughCopy("css");
  
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