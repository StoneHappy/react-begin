const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/App.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/tample.html')
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                    [
                        'babel-loader'
                    ]
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
        ]
    },
};