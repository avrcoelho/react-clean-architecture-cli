/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies, name } = require('./package.json');

module.exports = (env, argv) => {
  const isProduction = argv['mode'] === 'production';

  return {
    entry: ['babel-polyfill', './src/presentation/index'],
    output: {
      publicPath: '',
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.[chunkhash].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ },
        { loader: 'ts-loader', test: /\.tsx?$/, exclude: /node_modules/ },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
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
      new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './public/index.html',
        filename: 'index.html',
      }),
      new ModuleFederationPlugin({
        name,
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/presentation/App',
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: dependencies.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: dependencies['react-dom'],
          },
        },
      }),
      new CleanWebpackPlugin(),
    ],

    optimization: {
      runtimeChunk: 'single',
    },

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
