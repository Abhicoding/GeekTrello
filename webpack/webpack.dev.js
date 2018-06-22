const config = require('../webpack/webpack.config')

const devConfig = [Object.assign(
  {
    mode: 'development',
    devtool: 'source-map'
  }, config[0]
),
Object.assign(
  {
    mode: 'development',
    devtool: 'source-map',
    watch: true
  }, config[1]
)]

module.exports = devConfig
