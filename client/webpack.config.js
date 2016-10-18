"use strict"

let minimize = process.argv.indexOf('--minimize') !== -1,
    release = process.argv.indexOf('--release') !== -1,
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    plugins = [
        new webpack.optimize.CommonsChunkPlugin({ name: ['app'] }),
        new ExtractTextPlugin("bundle.css", { allChunks: true }),
        new HtmlWebpackPlugin({ template: './index.html', hash: true })
    ]

if (release || minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle:false}))
    plugins.push(new webpack.NoErrorsPlugin())
    plugins.push(new webpack.optimize.DedupePlugin())
}

module.exports = {
    entry: {
        app: "./index.js",
    },
    output: {
        path: __dirname + "/../public",
        publicPath: '/',
        filename: "[name].js"
    },
    devtool: (release) ? '' : 'source-map',
    resolve: {
        extensions: ['', '.js']
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!less-loader?minimize!"),
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    }
}