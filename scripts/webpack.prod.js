const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { isAnalyzer } = require("./constants");
console.log(isAnalyzer, "isAnalyzer")
module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // 打开打包结果分析工具
        isAnalyzer ? new BundleAnalyzerPlugin({
            openAnalyzer: false,//  阻止在默认浏览器中自动打开报告
        }) : () => { },
    ],
})