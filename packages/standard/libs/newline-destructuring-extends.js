module.exports = {
  plugins: ['newline-destructuring'],
  rules: {
    'newline-destructuring/newline': [
      'error',
      {
        items: 3,
        itemsWithRest: 3,
        maxLength: 120,
        consistent: true
      }
    ]
  }
}
