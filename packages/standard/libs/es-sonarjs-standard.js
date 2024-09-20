module.exports = {
  plugins: ['sonarjs'],
  rules: {

    /** 禁止函数的复杂度超过 15 */
    'sonarjs/cognitive-complexity': 'warn'
  }
}
