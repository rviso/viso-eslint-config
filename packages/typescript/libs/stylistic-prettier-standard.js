
module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // 禁止末尾逗号
        trailingComma: 'none',
        // 括号空格
        bracketSpacing: true,
        // 换行
        printWidth: 120,
        // 单引号
        singleQuote: true
      }
    ]
  }
}
