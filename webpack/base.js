const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        publicPath: "/",
        filename: 'js/[name].bundle.js?v=[hash:8]',
        path: path.resolve(__dirname, '../public')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css?v=[hash:8]"
        })
    ]
}