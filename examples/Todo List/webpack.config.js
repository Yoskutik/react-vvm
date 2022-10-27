const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: !isProd ? 'inline-source-map' : 'source-map',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js',
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
		...['components'].reduce((acc, it) => ({
        [`@${it}`]: path.resolve(__dirname, 'src', it),
        ...acc,
      }), {}),
	    '@yoskutik/react-vvm': path.resolve(__dirname, 'node_modules/@yoskutik/react-vvm/es5'),
	  },
    },
    performance: { hints: false },
    infrastructureLogging: { level: 'error' },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
          terserOptions: {
            output: { comments: false },
          },
        }),
      ]
    },
    node: { global: true },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      open: true,
    }
  };
};
