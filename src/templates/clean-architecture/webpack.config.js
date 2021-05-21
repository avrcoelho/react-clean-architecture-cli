/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (env, argv) => {
  const isProduction = argv['mode'] === 'production';

  return {
    entry: ['babel-polyfill', './src/presentation/index'],
    output: {
      publicPath: 'auto',
      path: path.join(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.svg'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /bootstrap\.tsx$/,
          loader: 'bundle-loader',
          options: {
            lazy: true,
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000,
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'public/fonts/[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ModuleFederationPlugin({
        name: '<%= microName %>',
        filename: 'remoteEntry.js',
        exposes: {
          '.': './src/presentation/App',
        },
        remotes: {},
        shared: [{ react: { singleton: true } }],
      }),
      new CleanWebpackPlugin(),
    ],

    devtool: isProduction ? false : 'eval-cheap-module-source-map',

    devServer: {
      overlay: true,
      contentBase: path.join(__dirname, 'public'),
      disableHostCheck: true,
      historyApiFallback: {
        disableDotRule: true,
      },
      port: 3000,
    },
  };
};
