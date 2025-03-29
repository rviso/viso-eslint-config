# Eslint Plugin Tsconfig Sort

This plugin sorts the `tsconfig.json` file in a way that makes it easier to read and maintain.

## Installation

```bash
npm install eslint-plugin-tsconfig-sort --save-dev
```

## Usage

Add `tsconfig-sort` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "tsconfig-sort"
  ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "tsconfig-sort/tsconfig-sort": "error" // 启用规则
  }
}
```
