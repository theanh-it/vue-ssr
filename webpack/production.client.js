const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./module.base')
const ClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = webpackMerge(base, {
    devtool: "production",
    mode: 'production',
    entry: { 
        client: path.resolve(__dirname, '../src/client.main.js')
    },
    plugins: [
        new ClientPlugin(),
        new HtmlWebpackPlugin({
            //favicon: "../public/img/logo.png",
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            minify: {
                html5                           : true,
                collapseWhitespace              : true,
                minifyCSS                       : true,
                minifyJS                        : true,
                minifyURLs                      : true,
                removeAttributeQuotes           : true,
                removeComments                  : true, // false for Vue SSR to find app placeholder
                removeEmptyAttributes           : true,
                removeOptionalTags              : true,
                removeRedundantAttributes       : true,
                removeScriptTypeAttributes      : true,
                removeStyleLinkTypeAttributese  : true,
                useShortDoctype                 : true,
                caseSensitive                   : true,
                keepClosingSlash                : true,
                sortAttributes                  : true,
                sortClassName                   : true,
                trimCustomFragments             : true
            }
        })
    ]
})