import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportLocalsConvention: 'camelCaseOnly',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[contenthash].js',
        clean: true,
    },
};

export default config;
