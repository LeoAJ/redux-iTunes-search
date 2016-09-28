import path from 'path';
import webpack from 'webpack';
import webpackConfig from './base';

webpackConfig.module.loaders = [
  {
    test: /\.js$/,
    loaders: ['babel'],
    exclude: /node_modules/
  },
  ...webpackConfig.module.loaders
];

export default Object.assign({}, webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../', 'src/')
  ],
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, '../', 'dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
