const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const { EnviromentPlugin, DefinePlugin } = require('webpack');

const production = process.NODE_ENV;

const plugins = [
  new HTMLPlugin({
    template: `${__dirname}/src/index.html`,
  }),
  new ExtractPlugin('bundle.[hash].css'),
  new EnviromentPlugin(['NODE_ENV']),
  new DefinePlugin({
    ___API_URL___: JSON.stringify(process.env.API_URL),
    __DEBUG___: JSON.stringify(!production),
  }),
];

module.exports = {

  plugins,

  entry: `${__dirname}/src/main.js`,

  devtool: 'source-map',

  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [`${__dirname}/src/styles`],
              },
            },
          ],
        }),
      },
    ],
  },
};
