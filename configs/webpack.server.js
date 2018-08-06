const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeExternals = require('webpack-node-externals')
const VueServerRenderer = require('vue-server-renderer/server-plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/entry-server.js'),
    output: {
        libraryTarget: 'commonjs2',
        filename: 'server-bundle.js',
        path: path.resolve(__dirname,'../dist')
    },
    target: 'node',
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
    externals: nodeExternals({
        // do not externalize CSS files in case we need to import it from a dep
        whitelist: /\.css$/
    }),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.tmpl.html'),
            title: 'my app'
        }),
        new VueLoaderPlugin(),
        new VueServerRenderer(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        },
        extensions: ['.vue', '.js']
    }
}