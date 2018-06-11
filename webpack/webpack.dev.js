const config = require('../webpack/webpack.config')

module.exports = Object.assign(
  {
    mode: 'development',
    devtool: 'source-map',
    watch: true
  }, config
)
