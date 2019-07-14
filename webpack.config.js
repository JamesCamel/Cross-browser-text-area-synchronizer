const path = require("path");
// const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
    watch: true,
    mode: "production",
    entry: {
        markdown_it:  './src/markdown_it.ts',
        gist: './src/gist.ts',
        // inject: './src/inject.ts',
        background: './src/background.ts',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].js",
        // publicPath: "./",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
        ],
    },
    // plugins: [
    //     new TSLintPlugin({
    //         files: ["./src/**/*.ts"],
    //     }),
    // ],
};