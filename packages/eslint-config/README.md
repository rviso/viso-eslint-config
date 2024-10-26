# Viso ESLint Config

**English** | [中文](https://github.com/rviso/viso-eslint-config/blob/master/README_zh-CN.md)

RViso's ESLint configurations. you can use this package to lint your JavaScript, TypeScript, and Vue3 projects.

## Installation

To install this package, run the following command:

```bash
npm install eslint @viso/eslint-config@latest --save-dev
```

## Usage

Create a `.eslintrc` file in the root directory of your project with the following content:

```json
{
  "extends": ["@viso/eslint-config"]
}
```

## Vscode Settings

If you are using Visual Studio Code, you can add the following settings to your `settings.json` file:

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

To make these settings take effect, you need to install the following plugins:

- [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## License

[MIT](./LICENSE)

## Related

- [@viso/eslint-config](https://www.npmjs.com/package/@viso/eslint-config) - RViso's ESLint Vue configurations.
