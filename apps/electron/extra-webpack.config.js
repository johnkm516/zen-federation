const path = require('path');

module.exports = {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'apps/electron/src/assets'),
    },
  },
};