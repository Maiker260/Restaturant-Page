const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant-Page',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        addCSS: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        addImages: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    client: {
      overlay: false,
    },
  },
  optimization: {
    runtimeChunk: 'single',
  },
};