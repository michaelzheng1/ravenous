// A core module to manipulate the file path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Specify an entry and output file
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
        // Redirects all server request to index.html
        publicPath: "/"
    },
    // Specify the loader
    module: {
        rules: [
            {
                // Look for any file that includes .js or .jsx
                test: /\.js$/,
                // Exclude the node module folder
                exclude: /node_modules/,
                // use babel-loader
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    devServer: {
        // the index.html would be served in place of 404 responses
        historyApiFallback: true,
        host: "0.0.0.0",
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Look at index.html as the template
            template: "./index.html"
        }),
        new CopyWebpackPlugin([{
            from: './env.js'
        }]),
        new Dotenv()
    ]
};