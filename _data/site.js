const isProd = process.env.ELEVENTY_ENV === 'production';

module.exports = {
  title: "Leaflight",
  description: "",
  baseurl: isProd ? "/anotherbloggerbloke" : "",
  url: "https://tuxerman.github.io"
};
