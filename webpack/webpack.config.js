const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const nodeExternals = require('webpack-node-externals')

const APP_DIR = path.resolve(__dirname, '../src')
const BUILD_DIR = path.resolve(__dirname, '../build')

const clientConfig = {
  entry: {
    main: APP_DIR + '/client/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'build/media/[name].[ext]',
          publicPath: url => url.replace(/public/, '')
        }
      },
      {
        test: /(\.s?css)$/,
        use: ExtractTextPlugin({
          use: [
            {
              loader: 'style-loader' // creates style nodes from JS strings
            }, {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {importLoaders: 1}
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            },
            {
              loader: 'postcss-loader',
              options: {plugins: [autoprefixer()]}
            }
          ]
        })
      },
      {
        test: /\.(jsx|js)?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react', 'es2015'] // Transpiles JSX and ES6
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'build/css/[name].css'
    })
  ]
}

const serverConfig = {
  entry: APP_DIR + '/server/index.js',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: BUILD_DIR,
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'build/media/[name].[ext]',
          publicPath: url => url.replace(/public/, ''),
          emit: false
        }
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'css-loader/locals'
        }]
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {presets: ['react-app']}
      }]
  }
}

module.exports = [clientConfig, serverConfig]
