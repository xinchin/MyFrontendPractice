var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    App: './src/js/App.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index-[hash:8].html',
      template: './src/template.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: '../index.html',
      template: './src/template.html',
    })
  ],
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        // use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
}