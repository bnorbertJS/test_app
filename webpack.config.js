const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    module: {
        rules: [{
            //transform every .js file excluding node_modules
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader"
            }
        },{
            test: /\.html$/,
            use: [{
                loader: "html-loader"
            }]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "API_URL": JSON.stringify("https://react-rent.herokuapp.com/api"),
            "STATIC_URL": JSON.stringify("https://react-rent.herokuapp.com")
        })
    ]
}