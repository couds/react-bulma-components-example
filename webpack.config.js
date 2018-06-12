const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

exports.default = {
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js'
  },
  watchOptions: {
    poll: 250,
    ignored: /node_modules/,
  },
  output: {
    path: path.join(__dirname, 'dist/public/'),
    filename: `javascripts/index_bundle.js`,
    publicPath: path.join(__dirname, 'dist/public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template/index.html'
    }),
    new ExtractTextPlugin({
      filename: `stylesheets/style.css`,
      allChunks: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            ['env', {
              targets: {
                browsers: ['last 2 versions', 'not safari < 11', 'not ie < 11'],
              }
            }],
            'react'],
        },
      },
      {
        test: /\.s?[ca]ss$/,
        loader:ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  // If you are having trouble with urls not resolving add this setting.
                  // See https://github.com/webpack-contrib/css-loader#url
                  minimize: true,
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        options: {
          name: `/fonts/[hash].[ext]`,
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      '~_variables.sass': path.resolve(__dirname, 'src/variables.scss'),
    },
  },
};