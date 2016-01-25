var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = null;
webpackConfig.debug = false;

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
webpackConfig.plugins.push(uglifyPlugin);

module.exports = webpackConfig;
