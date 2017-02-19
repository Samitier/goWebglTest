module.exports = function(env) {

    let path = require('path'),
        webpack = require('webpack'),
        ExtractTextPlugin = require("extract-text-webpack-plugin"),
        HtmlWebpackPlugin = require('html-webpack-plugin')

    let config = {
        entry: {
            app: './client/app-frontend/main.js',
            backend: "./client/app-backend/main.js"
        },
        output: {
            path: path.resolve(__dirname, './public'),
            publicPath: '/',
            filename: 'assets/[name].bundle.js'
        },
        resolve: {
            modules: [ 
                path.resolve('./client'),
                "node_modules"
            ],
            extensions: ['.js', '.vue', '.css']
        },
        plugins: [
            new HtmlWebpackPlugin({ 
                template: './client/app-frontend/index.html', 
                hash: true, 
                chunks: ['app'],
                filename: 'index.html' 
            }),
            new HtmlWebpackPlugin({ 
                template: './client/app-backend/index.html', 
                hash: true, 
                chunks: ['backend'],
                filename: 'backend.html' 
            }),
            new ExtractTextPlugin({ filename: "assets/style.bundle.css", allChunks: true })
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }),
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file',
                    query: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
        devtool: '#eval-source-map',
        devServer: {
           proxy: {
               "**": "http://localhost:3001"
           }
        }
    }

    if (process.env.NODE_ENV === 'production' || env && env.release) {
        config.devtool = ''
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.NoEmitOnErrorsPlugin(),
        ])
    }

    return config
}