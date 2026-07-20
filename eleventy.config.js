

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
 eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/music");
 eleventyConfig.addPassthroughCopy({".src/favicon/": "/"});
 eleventyConfig.addPassthroughCopy("src/js");


 const english = new Intl.DateTimeFormat("en");
 eleventyConfig.addFilter("niceDate", function(d) {

return english.format(d);

 });
eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

	function extractExcerpt(post) {
		if(!post.templateContent) return '';
		if(post.templateContent.indexOf('</p>') > 0) {
			let end = post.templateContent.indexOf('</p>');
			return post.templateContent.substr(0, end+4);
		}
		return post.templateContent;
	}

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};


