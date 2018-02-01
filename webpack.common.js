const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ENTRY_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
    entry: path.join(ENTRY_DIR, 'index.js'),
    output: {
        filename: 'bundle-[hash].js',
        path: BUILD_DIR,
        publicPath: '/'
    },
    module: {
        rules: [
            { // JS
                test: /\.jsx?/,
                include: ENTRY_DIR,
                loader: 'babel-loader'
            },
            { // CSS/SASS
                test: /\.(sass|scss|css)$/,
                // include: [
                //     path.join(__dirname, 'node_modules', 'bulma', 'bulma.sass'),
                //     path.join(__dirname, 'src', 'client', 'styles')
                // ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.join(__dirname, 'node_modules')
                                ],
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/assets/index.html' }),
        new ExtractTextPlugin('main-[hash].css')
    ]
};
