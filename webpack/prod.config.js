const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[contenthash].js',
        clean: true
    }
}