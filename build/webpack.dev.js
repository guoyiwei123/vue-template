const { merge } = require("webpack-merge");
const HappyPack = require("happypack");
const commonConfig = require("./webpack.common");
module.exports = merge(commonConfig, {
    mode: "development",
    cache: false,
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)/,
                use: "happypack/loader?id=images",
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: "images",
            loaders: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images',
                        name: "[name].[ext]"
                    },
                }
            ]
        })
    ],
    devServer: {
        compress: true,
        port: 8080,
        historyApiFallback: {
            rewrites: [
                { from: /^\/.*$/, to: '/index.html' },
            ]
        }
    },
    devtool: "inline-source-map"
})