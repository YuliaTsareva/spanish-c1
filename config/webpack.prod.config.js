var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var ENV = process.env.ENV = 'production';

webpackConfig.devtool = null;
webpackConfig.debug = false;

webpackConfig.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'ENV': JSON.stringify(ENV)
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: false
    })
];

module.exports = webpackConfig;
