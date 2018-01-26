const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({ parallel: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new FaviconsWebpackPlugin({
            logo: path.join(__dirname, 'src', 'assets', 'logo.png')
        })
    ]
})
