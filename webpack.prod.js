const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({ parallel: true }),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        new FaviconsWebpackPlugin({ logo: path.join(__dirname, 'src', 'assets', 'logo.png') })
    ]
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
})
