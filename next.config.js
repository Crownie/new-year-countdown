const withImages = require('next-images');
module.exports = withImages(
  {
    cssModules: false,
    exportTrailingSlash: true,
    exportPathMap: function () {
      return {
        '/': {page: '/'},
      };
    },
  }
);
