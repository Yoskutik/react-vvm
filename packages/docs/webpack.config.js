const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'inline-source-map',
        entry: {
            main: './src/index.tsx',
        },
        output: {
            path: path.join(__dirname, 'build'),
            filename: `${isProd ? '[contenthash]' : '[name]'}.bundle.js`,
            chunkFilename: `./chunks/${isProd ? '[contenthash]' : '[id]'}.chunk.js`,
            clean: true,
        },
        target: isProd ? 'browserslist' : 'web',
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }, {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            }, {
                test: /\.example$/,
                type: 'asset/source',
            }],
        },
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                'react': 'preact/compat',
                'react-dom': 'preact/compat',
                "react/jsx-runtime": 'preact/jsx-runtime',
            },
            extensions: ['.js', '.ts', '.tsx'],
        },
        optimization: {
            minimizer: [
                new TerserPlugin(),
            ],
        },
        plugins: [
            new HtmlPlugin({
                hash: true,
                scriptLoading: 'blocking',
                template: './src/index.html',
            }),
          new CopyPlugin({
              patterns: [
                  { from: './public' }
              ],
          })
        ],
        devServer: {
            open: true,
        },
    };
};
