const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: { index: './src/index.js' },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }
            ]

        }]
    },
    plugins: [
        new UglifyjsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}