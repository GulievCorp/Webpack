const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        alatytics: './src/analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    'mode': 'development'
}