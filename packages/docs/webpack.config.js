const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? 'source-map' : 'inline-source-map',
        entry: {
            main: './src/index.tsx',
        },
        output: {
            path: path.join(__dirname, 'build'),
            filename: `${isProd ? '[contenthash]' : '[name]'}.bundle.js`,
            chunkFilename: `./resources/chunks/${isProd ? '[contenthash]' : '[id]'}.chunk.js`,
            clean: true,
        },
        target: isProd ? 'browserslist' : 'web',
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }, {
                test: /\.example$/,
                type: 'asset/source',
            }],
        },
        resolve: {
            alias: {
                // '@yoskutik/react-vvm': path.resolve(__dirname, 'node_modules/@yoskutik/react-vvm/es5'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@pages': path.resolve(__dirname, 'src/pages'),
            },
            extensions: ['.js', '.ts', '.tsx'],
        },
        optimization: {
            minimizer: [
                new TerserPlugin(),
            ]
        },
        plugins: [
            new HtmlPlugin({
                hash: true,
                scriptLoading: 'blocking',
                template: './src/index.html',
            }),
            // new CopyPlugin({
            //    patterns: [
            //        { from: 'public', to: './' },
            //    ],
            // }),
        ],
        devServer: {
            open: true,
        },
    };
};
