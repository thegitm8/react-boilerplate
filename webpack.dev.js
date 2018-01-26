const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')
const dashboard = new Dashboard()

const PORT = 9002

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        quiet: true,   // important
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new DashboardPlugin({
            handler: dashboard.setData
        })
    ]
})
