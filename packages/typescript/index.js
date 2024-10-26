'use strict'

module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.d.ts',
          '.mts'
        ]
      }
    }
  },
  overrides: [
    {
      files: [
        '*.ts',
        '*.d.ts',
        '*.mts'
      ],
      parser: '@typescript-eslint/parser',
      extends: [
        './libs/ts-standard',
        './libs/stylistic-ts-standard',
        './libs/ts-canonical-extends',
        './libs/newline-destructuring-extends'
      ]
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        './libs/ts-standard',
        './libs/stylistic-ts-standard',
        './libs/ts-canonical-extends',
        './libs/newline-destructuring-extends'
      ]
    }
  ]
}
