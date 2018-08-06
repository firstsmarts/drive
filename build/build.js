const rm = require('rimraf')
const ora = require('ora')
const path = require('path')
const webpack = require('webpack')
const config = require('../configs/webpack.server')

const loading = ora('building...')
loading.start()

rm(path.resolve(__dirname,'../dist'),(err) => {
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