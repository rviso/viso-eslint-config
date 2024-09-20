module.exports = {
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['**/*.html', '**/*.htm'],
      parser: '@html-eslint/parser'
    }
  ],
  extends: ['plugin:@html-eslint/recommended'],
  rules: {
    '@html-eslint/require-lang': 'off',
    '@html-eslint/require-li-container': 'off',
    '@html-eslint/require-title': 'off',
    '@html-eslint/indent': ['error', 2]
  }
}
