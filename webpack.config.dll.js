const path                  = require('path');
const webpack               = require('webpack');
module.exports = {
  entry: {
    vendor: [
      'prop-types',
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].dll.js',
    library: '[name]_[chunkhash]',
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'react-hot-loader/webpack'
        }, {
          loader: 'awesome-typescript-loader'
        }]
     },
     {
       enforce: 'pre',
       test: /\.js$/,
       use: [{
        loader: 'source-map-loader'
       }]
     },
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "[name]-manifest.dll.json"),
      context: __dirname,
      name: "[name]_[chunkhash]",
    })
  ]
};
