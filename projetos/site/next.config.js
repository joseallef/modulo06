const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@joseallef/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
