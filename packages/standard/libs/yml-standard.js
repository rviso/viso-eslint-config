module.exports = {
  overrides: [
    {
      files: ['**/*.yaml', '**/*.yml'],
      parser: 'yaml-eslint-parser'
    }
  ],
  extends: ['plugin:yml/standard'],
  rules: {
    'yml/quotes': [
      'error',
      {
        prefer: 'single',
        avoidEscape: false
      }
    ], // 禁止使用双引号
    'yml/no-empty-document': 'off' // 禁止空文档
  }
}
