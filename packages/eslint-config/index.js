'use strict'

module.exports = {
  root: true, // 作用于当前目录及其子目录
  extends: ['@viso/eslint-config-standard'],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.jsx'
      ],
      extends: ['@viso/eslint-config-typescript'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    {
      files: ['*.vue'],
      extends: ['@viso/eslint-config-vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
