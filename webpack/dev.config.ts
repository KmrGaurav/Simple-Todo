import path from 'path';
import { Configuration, WebpackOptionsNormalized } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration | WebpackOptionsNormalized = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
    },
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        clean: true,
    },
};

export default config;
