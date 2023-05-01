const path = require('path');
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
      clean: true,
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
        '@services': path.resolve(__dirname, 'src/services'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.swcMinify,
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
      }),
      new MiniCssExtractPlugin(),
    ],
    devServer: {
      open: true,
    },
    ignoreWarnings: [{
      module: /@yoskutik\/react-vvm/,
    }],
  };
};
