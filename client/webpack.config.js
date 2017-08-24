const path = require('path');
require('dotenv').config();

module.exports = {
  entry: './src/index.jsx',
  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'source-map',
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: process.env.WEBPACK_DEV_PORT,
    inline: true, 
    hot: true    
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  module: {
    rules: [
      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'url-loader'
        }
      }, 
      {
        test: /\.mp4$/,
        use: {
          loader: 'file-loader'
        }
      },
      // https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
