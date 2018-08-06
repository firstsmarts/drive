const rm = require('rimraf')
const ora = require('ora')
const path = require('path')
const webpack = require('webpack')
const serverConfig = require('../configs/webpack.server')
const clientConfig = require('../configs/webpack.client')


let config
let rmPath
const isClient = process.argv.indexOf('client') > 0 ? true : false
if (isClient) {
    config = clientConfig
    rmPath = path.resolve(__dirname,'../client-dist')
}else{
    config = serverConfig
    rmPath = path.resolve(__dirname,'../dist')
}
const loading = ora('building...')
loading.start()

rm(rmPath,(err) => {
    if (err) throw err
    webpack(config,(err,stats) => {
        loading.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        if (stats.hasErrors()) {
            process.exit(1)
        }
    })
})