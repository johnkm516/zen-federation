import merge from 'webpack-merge'

module.exports = (config, context) => {
  return merge(config, {
    output: {
        globalObject: `typeof self !== 'undefined' ? self : this`
    }
  });
};