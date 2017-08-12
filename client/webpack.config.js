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
    port: process.env.WEBPACK_DEV_PORT
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
  }
};
