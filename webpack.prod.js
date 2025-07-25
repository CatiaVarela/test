const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: { chunks: 'all' },  
    runtimeChunk: 'single',          
    concatenateModules: true         
  }
});
