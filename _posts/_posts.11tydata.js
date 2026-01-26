const isProd = process.env.ELEVENTY_ENV === 'production';
const pathPrefix = isProd ? "/anotherbloggerbloke" : "";

module.exports = {
  layout: "post",
  tags: ["posts"],
  eleventyComputed: {
    permalink: (data) => {
      // Strip the YYYY-MM-DD- prefix from the fileSlug
      const slug = data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
      return `${pathPrefix}/posts/${slug}/`;
    }
  }
};
