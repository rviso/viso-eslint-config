module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  plugins: ['unused-imports'],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
