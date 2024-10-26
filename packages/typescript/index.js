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
        '*.mts',
        '*.tsx'
      ],
      parser: '@typescript-eslint/parser',
      extends: [
        './libs/ts-standard',
        './libs/stylistic-ts-standard',
        './libs/ts-canonical-extends',
        './libs/ts-import-extends',
        './libs/newline-destructuring-extends'
      ]
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['./libs/stylistic-react-jsx-standard']
    },
    {
      files: ['*.jsx'],
      extends: ['./libs/stylistic-react-jsx-standard'],
      rules: {
        'import/named': 'off'
      }
    }
  ]
}
