const path = require('path')
const base = require('./webpack.base')

module.exports = Object.assign({}, base, {
    mode: 'production'
})