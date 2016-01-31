var path = require('path');
var webpack = require('webpack');

module.exports = {
    // for faster builds use 'eval'
    devtool: 'eval',
    debug: true,

    // our angular app
    entry: {'vendor': './app/vendor.ts', 'main': './app/main.ts', 'test': './app/test-main.js'},

    // Config for our build files
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        // ensure loader extensions match
        extensions: ['', '.ts', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: [/node_modules/]
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [/node_modules\/(?!(ng2-.+))/]
            },
            {
                test: /\.csv$/,
                loader: 'dsv-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity})
    ],

    // Other module loader config
    tslint: {
        emitErrors: false,
        failOnHint: false
    },
    // our Webpack Development Server config
    //devServer: {
    //    port: metadata.port,
    //    host: metadata.host,
    //    historyApiFallback: true,
    //    watchOptions: { aggregateTimeout: 300, poll: 1000 }
    //},
    // we need this due to problems with es6-shim
    node: {
        global: 'window',
        progress: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
