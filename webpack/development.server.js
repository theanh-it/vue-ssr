const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./module.base')
const externals = require('webpack-node-externals')
const ServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = webpackMerge(base, {
    mode: "development",
    entry: {
        server: path.resolve(__dirname, '../src/server.main.js')
    },
    externals: [externals()],
    target: 'node',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new ServerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: path.resolve(__dirname, '../index.ssr.html'),
            excludeChunks: ['server'],
            hash: true
        })
    ]
})