/*
 * @Author: chengMingRui
 * @Date: 2023-02-16 09:08:40
 * @LastEditTime: 2023-02-16 09:46:58
 * @Description: 
 * @FilePath: \typeScript-SDK-template\scripts\webpack.dev.js
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, PROJECT_PATH } = require('./constants');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(PROJECT_PATH, './public/index.html'),
            scriptLoading: 'blocking',
        })
    ],
    devServer: {
        host: '127.0.0.1', // 指定 host，不设置的话默认是 localhost
        port: 9003, // 指定端口，默认是8080
        compress: true, // 是否启用 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
    },
})