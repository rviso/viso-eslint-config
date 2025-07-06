# @viso/eslint-config-standard

提供基础的 ESLint 配置。

## 功能特性

- 🚀 基础的 ESLint 规则配置
- 🧹 自动清除未使用的导入模块（unused-imports）
- 📦 支持多种文件类型（JS、TS、Vue、JSON、YAML 等）
- 🎯 智能的代码风格检查和自动修复

## 安装

要安装这个包，请运行以下命令：

```bash
npm install @viso/eslint-config-standard --save-dev
```

或者使用 [yarn](https://yarnpkg.com)：

```bash
yarn add @viso/eslint-config-standard --dev
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件，内容如下：

```js
module.exports = {
  extends: ['@viso/eslint-config-standard'],
}
```

## 自动修复

运行以下命令可以自动修复可修复的问题（包括清除未使用的导入）：

```bash
npx eslint . --fix
```
