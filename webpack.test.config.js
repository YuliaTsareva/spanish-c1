// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
// Webpack Plugins
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin  = require('webpack/lib/DefinePlugin');
var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/*
 * Config
 */
module.exports = {
    resolve: {
        cache: false,
        extensions: ['','.ts','.js','.json','.css','.html']
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    // remove TypeScript helpers to be injected below by DefinePlugin
                    'compilerOptions': {
                        'removeComments': true,
                        'noEmitHelpers': true,
                    },
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [ /\.e2e\.ts$/, /node_modules/ ]
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/,  loader: 'raw-loader'},
            {
                test: /\.csv$/,
                loader: 'dsv-loader'
            }
        ],
        noParse: [
            /zone\.js\/dist\/.+/,
            /angular2\/bundles\/.+/
        ]
    },
    stats: { colors: true, reasons: true },
    debug: false,
    plugins: [
        new DefinePlugin({
            // Environment helpers
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV)
            },
            'global': 'window',
            // TypeScript helpers
            '__metadata': 'Reflect.metadata',
            '__decorate': 'Reflect.decorate'
        }),
        new ProvidePlugin({
            '__awaiter': 'ts-helper/awaiter',
            '__extends': 'ts-helper/extends',
            '__param': 'ts-helper/param',
            'Reflect': 'es7-reflect-metadata/dist/browser'
        })
    ],
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
