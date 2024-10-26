module.exports = {
  overrides: [
    {
      files: [
        '**/*.json',
        '**/*.json5',
        '**/*.jsonc',
        '**/*.eslintrc',
        '**/*.babelrc',
        '**/*.stylelintrc',
        '**/*.prettierrc'
      ],
      parser: 'jsonc-eslint-parser'
    }
  ],
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  rules: {
    'jsonc/indent': [
      'error',
      2,
      {}
    ],
    'jsonc/array-bracket-spacing': ['error', 'never'],
    'jsonc/comma-dangle': 'error',
    'jsonc/comma-style': ['error', 'last'],
    'jsonc/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'jsonc/no-octal-escape': 'error',
    'jsonc/object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'jsonc/object-curly-spacing': 'error',
    'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }]
  }
}
