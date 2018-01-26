const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ]
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
};
