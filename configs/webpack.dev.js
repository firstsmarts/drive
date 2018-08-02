const path = require('path')
const base = require('./webpack.base')

module.exports = Object.assign({},base,{
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname,'../dist'),
        compress: true,
        historyApiFallback: true,
        overlay: true
    }
})