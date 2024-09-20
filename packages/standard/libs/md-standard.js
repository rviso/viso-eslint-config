module.exports = {
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    }
  ],
  plugins: ['markdown'],
  extends: ['plugin:markdown/recommended'],
  rules: {
  }
}