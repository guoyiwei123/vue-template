const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require("happypack");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "happypack/loader?id=js"
            },{
                test: /\.vue$/,
                exclude: /node_modules/,
                use: ["vue-loader"]
            }]
    },
    plugins: [
        new HappyPack({
            id: "js",
            loaders: [
                {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ]
                    }
                }
            ]
        }),
        new ESLintPlugin({
            overrideConfigFile: path.resolve(__dirname, "./.eslintrc.js"),
            extensions: ["js", "vue"],
            context: path.resolve(__dirname, "../src"),
            fix: true
        }), 
        new StylelintPlugin({
            configFile: path.resolve(__dirname, "./.stylelintrc.js"),
            context: path.resolve(__dirname, "../src"),
            fix: true
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "",
            filename: "./index.html",
            template: path.resolve(__dirname, "../src/index.html"),
            hash: true,
            cache: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./public/favicon.ico", to: "./", noErrorOnMissing: true}
            ]
        })
    ],
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "../src/components"),
            "@pages": path.resolve(__dirname, "../src/pages"),
            "@store": path.resolve(__dirname, "../src/store"),
            "@config": path.resolve(__dirname, "../src/config"),
            "@styles": path.resolve(__dirname, "../src/styles")
        },
        extensions: [".js", ".vue"]
    }
}