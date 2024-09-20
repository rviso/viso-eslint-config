'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: [
        './libs/vue-recommended',
        './libs/stylistic-vue-script-standard',
        './libs/stylistic-vue-template-standard',
        './libs/vue-script-standard',
        './libs/vue-template-standard',
        './libs/vue-typescript-standard'
      ]
    }
  ]
}
