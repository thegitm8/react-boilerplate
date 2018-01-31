const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle-[hash].js',
        path: path.join(__dirname, '/dist')
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', options: { silent: true } },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ]
};
