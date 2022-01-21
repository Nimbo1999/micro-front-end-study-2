const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html')
    })
  ]
}

module.exports = merge(commonConfig, devConfig);