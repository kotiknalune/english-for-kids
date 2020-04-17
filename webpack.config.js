const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: 'development',
    devtool: isProduction ? 'production' : 'source-map',
    watch: !isProduction,
    entry: ['./src/js/script.js','./src/sass/main.scss'],
    output: {
      path: path.resolve(__dirname, '/dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
     }),
     
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        }
      ]
    }
 }
 return config;
};