const isProd = process.env.ELEVENTY_ENV === 'production';

module.exports = {
  title: "see.pha.",
  description: "",
  baseurl: isProd ? "/anotherbloggerbloke" : "",
  url: "https://tuxerman.github.io"
};
