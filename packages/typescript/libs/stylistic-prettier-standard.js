
module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // tab 宽度
        tabWidth: 2,
        // 使用空格缩进
        useTabs: false,
        // 禁止末尾逗号
        trailingComma: 'none',
        // 括号空格
        bracketSpacing: true,
        // 换行
        printWidth: 120,
        // 单引号
        singleQuote: true,
        // 禁止末尾分号
        semi: false

      }
    ]
  }
}
