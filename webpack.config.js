const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        alatytics: './src/analytics.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    'mode': 'development'
}