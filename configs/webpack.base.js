const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.resolve(__dirname,'../src/index.js'),
    output:{
        path: path.resolve('../dist'),
        filename: '[name]-[hash:5].js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
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
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/index.tmpl.html'),
            title: 'my app'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            vue: 'vue/dist/vue.common.js'
        },
        extensions:['.vue','.js']
    }
}