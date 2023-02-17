/*
 * @Author: chengMingRui
 * @Date: 2023-02-16 09:00:45
 * @LastEditTime: 2023-02-16 09:19:32
 * @Description: 项目中用到的常量
 * @FilePath: \typeScript-SDK-template\scripts\constants.js
 */
const path = require('path')
const resolve = path.resolve
const isDev = process.env.NODE_ENV !== 'production'
const isAnalyzer = process.env.analyzer != undefined // 是否需要打包文件分析


const PROJECT_PATH = resolve(__dirname,'../')

module.exports = {
  PROJECT_PATH,
  resolve,
  isDev,
  isAnalyzer
}