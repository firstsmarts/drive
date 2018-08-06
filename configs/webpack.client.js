const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeExternals = require('webpack-node-externals')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/entry-client'),
    mode: 'production',
    output: {
        path: path.resolve('./client-dist'),
        filename: '[name]-[chunkhash:5].js',
        
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.resolve('../dist/fonts/[name].[hash:5].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.tmpl.html'),
            title: 'my app'
        }),
        new VueLoaderPlugin(),
        new VueSSRClientPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        },
        extensions: ['.vue', '.js']
    }
}