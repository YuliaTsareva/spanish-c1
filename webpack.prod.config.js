var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = null;
webpackConfig.debug = false;

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    mangle: false
});
webpackConfig.plugins.push(uglifyPlugin);

module.exports = webpackConfig;
