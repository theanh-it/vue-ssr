const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./module.base')
const ClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = webpackMerge(base, {
    devtool: "inline-source-map",
    mode: 'development',
    entry: { 
        client: path.resolve(__dirname, '../src/client.main.js')
    },
    plugins: [
        new ClientPlugin(),
        new HtmlWebpackPlugin({
            //favicon: "../public/img/logo.png",
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html')
        })
    ]
})