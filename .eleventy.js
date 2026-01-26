module.exports = function(eleventyConfig) {

  // Use env var to determine if we're in production (GitHub Pages) or dev
  const isProd = process.env.ELEVENTY_ENV === 'production';
  const pathPrefix = isProd ? "/anotherbloggerbloke/" : "/";

  // Make pathPrefix available in templates
  eleventyConfig.addGlobalData("pathPrefix", pathPrefix);

  // Copy images and CSS
  if (isProd) {
    eleventyConfig.addPassthroughCopy({"imgs": "anotherbloggerbloke/imgs"});
    eleventyConfig.addPassthroughCopy({"css": "anotherbloggerbloke/css"});
  } else {
    eleventyConfig.addPassthroughCopy("imgs");
    eleventyConfig.addPassthroughCopy("css");
  }

  // Add collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md").reverse();
  });

  // Filter to format dates
  eleventyConfig.addFilter("postDate", (dateObj) => {
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateObj);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  });

  // Filter to extract year from date
  eleventyConfig.addFilter("year", (dateObj) => {
    return new Date(dateObj).getFullYear();
  });

  // Filter to format date as "Mon DD"
  eleventyConfig.addFilter("archiveDate", (dateObj) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateObj);
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}`;
  });

  // Filter to extract excerpt (first paragraph or first 200 chars)
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return '';
    const firstPara = content.split('</p>')[0];
    if (firstPara && firstPara.includes('<p>')) {
      return firstPara.replace(/<p>/g, '').trim();
    }
    const text = content.replace(/<[^>]*>/g, '').trim();
    return text.substring(0, 200) + (text.length > 200 ? '...' : '');
  });

  // Exclude build artifacts from input
  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add("node_modules/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    pathPrefix: pathPrefix,
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
