/**
 * @author: @AngularClass
 */

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod.config');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack.test.config');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.config');
}
