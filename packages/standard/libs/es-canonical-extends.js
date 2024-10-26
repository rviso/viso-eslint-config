module.exports = {
  plugins: ['canonical'],
  extends: ['plugin:canonical/recommended'],
  rules: {
    'canonical/id-match': 'off',
    'canonical/import-specifier-newline': 'off',
    'canonical/destructuring-property-newline': 'off'
  }
}
