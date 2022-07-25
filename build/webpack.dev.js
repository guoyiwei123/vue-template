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
                use: ["style-loader", "css-loader", "sass-loader"],
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
        },
        headers: {
            'Content-Security-Policy-Report-Only': 'script-src https://accounts.google.com/gsi/client; frame-src https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/;'
        },
        client: {
            overlay: {
                warnings: false
            }
        }
    },
    devtool: "inline-source-map"
})