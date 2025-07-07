# RViso ESLint Config

[English](./README.md) | **中文**

![npm](https://img.shields.io/npm/v/@viso/eslint-config)
![node](https://img.shields.io/badge/node-%5E18.0.0-bluegreen)
![author](https://img.shields.io/badge/author-lingann-purple)
![license](https://img.shields.io/github/license/rviso/viso-eslint-config)

---

RViso的ESLint配置。您可以使用此包来为您的JavaScript、TypeScript和Vue3项目提供代码检查。

## Installation

要安装这个包，请运行以下命令：

```bash
npm install eslint @viso/eslint-config@latest --save-dev
```

## Usage

在项目根目录下创建 `.eslintrc` 文件，内容如下：

```json
{
  "extends": ["@viso/eslint-config"]
}
```

## Vscode 设置

如果您使用的是Visual Studio Code，您可以将以下设置添加到您的 `settings.json` 文件中：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "vue-html",
    "json",
    "jsonc",
    "markdown",
    "yaml"
  ]
}
```

为了使这些设置生效，您需要安装以下插件：

- [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Related

- [@viso/eslint-config](https://www.npmjs.com/package/@viso/eslint-config) - RViso 的 ESLint Vue 配置。
