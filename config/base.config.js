const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const cssLoader = [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[path]-[name]-[local]-[hash]'
    }
  },
  { loader: 'postcss-loader' }
]

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          ...cssLoader,
          { loader: 'less-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          ...cssLoader,
          { loader: 'sass-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  }
}