const HtmlWebpackPlugin     = require('html-webpack-plugin');
const path                  = require('path');
const webpack               = require('webpack');
const AddAssetHtmlPlugin    = require('add-asset-html-webpack-plugin');
const open_webpack_notifier = false;
const open_write_file       = false;

const config = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.tsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    filename: '[name].[hash].js',
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, "src"),
        use: [{
          loader: 'react-hot-loader/webpack'
        },{
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '「Hello typescript」',
      inject: true,
      template: './src/index.html',
      filename: 'index.html',
      chunksSortMode: 'auto',
      xhtml: true,
      chunks: ['app'],
      cache: true,
      showErrors: true,
    }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/vendor-manifest.dll.json')
    }),
    new AddAssetHtmlPlugin([
      {filepath: require.resolve('./dist/vendor.55026a8bdf762f1533ba.dll.js')},
    ]),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    historyApiFallback: true,
    port: 9000
  },
};

if(open_webpack_notifier === true)
{
  const WebpackNotifierPlugin = require('webpack-notifier');
  config.plugins.push(
    new WebpackNotifierPlugin({
      title: 'STATUS!',
      // contentImage: path.join(__dirname, 'logo.png'),
      excludeWarnings: true,
      alwaysNotify: true,
      skipFirstNotification: false,
    })
  );
}

if(open_write_file === true)
{
  const WriteFilePlugin = require('write-file-webpack-plugin');
  config.plugins.push(new WriteFilePlugin());
}



module.exports = config;
