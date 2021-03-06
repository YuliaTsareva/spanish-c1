var path = require('path');
var webpack = require('webpack');
var ENV = process.env.ENV = 'development';

module.exports = {
    // for faster builds use 'eval'
    devtool: 'eval',
    debug: true,

    // our angular app
    entry: {
        'polyfills': './app/polyfills.browser.ts',
        'vendor':    './app/vendor.browser.ts',
        'main':      './app/main.browser.ts',
        'test':      './app/test-main.js'
    },

    // Config for our build files
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        publicPath: 'dist'
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
                loader: 'awesome-typescript-loader',
                exclude: [/node_modules\/(?!(ng2-.+))/]
            },
            {
                test: /\.html/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.csv$/,
                loader: 'dsv-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
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
