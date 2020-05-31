/* eslint-disable no-undef */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = argv.mode === 'development';
  process.env.NODE_ENV = argv.mode;

  if (!isProduction && !isDevelopment) {
    throw new Error(`Invalid mode set: ${String(argv.mode)}`);
  }

  const config = {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: '[name].[hash].js',
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          loader: ['babel-loader', 'eslint-loader'], // Order is important!
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
        },
      ],
    },
  };

  if (isProduction) {
    config.output.path = path.resolve(__dirname, 'dist');
  }

  if (isDevelopment) {
    config.output.path = path.resolve(__dirname, 'dist/dev');
    config.devtool = 'inline-source-map';
    config.devServer = {
      contentBase: './dist/dev',
    };
  }

  return config;
};
