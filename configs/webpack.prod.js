const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
console.log(path.resolve(__dirname,'../'))
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname,'../src/index.js'),
    output:{
        path: path.resolve(__dirname,'../dist'),
        filename: '[name]-[hash:5].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/index.tmpl.html'),
            title: 'my app'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname,'../')
        })
    ],
    resolve:{
        alias:{
            vue: 'vue/dist/vue.common.js'
        },
        extensions:['.vue','.js']
    }
}