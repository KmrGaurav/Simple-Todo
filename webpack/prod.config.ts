import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.[contenthash].js",
        clean: true,
    },
};

export default config;
