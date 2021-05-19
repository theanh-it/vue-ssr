const webpackMerge = require('webpack-merge')
const base = require('./base');

module.exports = webpackMerge(base, {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime','@babel/plugin-syntax-dynamic-import']
                    },
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css'   : ['css-loader'],
                        'scss'  : ['vue-style-loader','css-loader','sass-loader'],
                        'sass'  : ['vue-style-loader','css-loader','sass-loader?indentedSyntax']
                    }
                }
            },
            { 
                test: /\.(scss|sass)$/,
                use: ['vue-style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                    outputPath: '../dist/fonts',    // where the fonts will go
                    publicPath: '/public/fonts'       // override the default path
                }
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                    outputPath: '../dist/fonts',    // where the fonts will go
                    publicPath: '/public/fonts/'       // override the default path
                }
            }
        ]
    }
})