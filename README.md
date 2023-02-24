# typescript-libs-template
## 说明

本项目为开发者提供了一个快速开始编写 TypeScript 库的模板，包含了常用的工具和流程。您可以基于此模板开发自己的库。

## 代码结构
```
├── dist
├── src
│   ├── index.ts
│   └── ...
├── tests
│   ├── index.test.ts
│   └── ...
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── LICENSE
├── package.json
├── README.md
└── tsconfig.json

## 文件说明
```
- dist: 构建生成的目录
- src: 存放源码的目录
- tests: 存放测试用例的目录
- .eslintignore: ESLint 忽略文件列表
- .eslintrc.json: ESLint 配置文件
- .gitignore: Git 忽略文件列表
- .prettierrc: Prettier 配置文件
- LICENSE: 许可证文件
- package.json: 项目依赖和配置文件
- README.md: 项目说明文档
- tsconfig.json: TypeScript 配置文件

## 功能
1. 可直接根据文件注释生成对应的文档
2. 支持代码规范和提交规范
   1. 使用 `EditorConfig` + `Prettier` + `ESLint` 组合来实现 代码规范化。
   2. 使用 `husky` + `lint-staged` + `commitlint` 进行 提交规范的代码
   3. 使用 `standard-version` 实现 生成 `ChangeLog`
3. 支持 `Tree-shaking` 剔除没有使用的代码，以降低包的体积
4. 支持打包文件分析
5. 使用 `Webpack5` 进行构建打包


## 许可
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
