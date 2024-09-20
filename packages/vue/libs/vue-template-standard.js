'use strict'

module.exports = {
  rules: {

    // -----------------------------------------------------
    // #region 顺序规则
    // -----------------------------------------------------

    // 组件标签顺序
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 命名规则
    // -----------------------------------------------------

    // 组件名必须是多个单词
    'vue/multi-word-component-names': 'off',

    // 组件名必须是kebab-case
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false
      }
    ],

    // 组件名必须是PascalCase
    'vue/component-options-name-casing': ['error', 'PascalCase'],

    // 事件名必须是kebab-case
    'vue/v-on-event-hyphenation': ['error', 'always'],

    // 属性名必须是kebab-case
    'vue/attribute-hyphenation': ['error', 'always'],

    // 自定义事件必须是kebab-case
    'vue/custom-event-name-casing': ['error', 'kebab-case'],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 属性规则
    // -----------------------------------------------------

    // 属性顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // 组件定义
          'LIST_RENDERING', // 列表渲染
          'CONDITIONALS', // 条件渲染
          'RENDER_MODIFIERS', // 渲染修饰符
          'GLOBAL', // 全局属性
          'UNIQUE', // 唯一属性
          'TWO_WAY_BINDING', // 双向绑定
          'OTHER_DIRECTIVES', // 其他指令
          'OTHER_ATTR', // 其他属性
          'EVENTS', // 事件
          'CONTENT' // 内容
        ],
        alphabetical: false
      }
    ],

    // 禁止使用v-bind
    'vue/no-restricted-v-bind': ['error', '/^v-/'],

    // 禁止使用无意义的v-bind
    'vue/no-useless-v-bind': 'error',

    // 禁止在组件上使用v-text和v-html
    'vue/no-v-text-v-html-on-component': 'error',


    // 禁止使用 v-html
    'vue/no-v-html': 'off',


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 模板字符串规则
    // -----------------------------------------------------

    // 模板字符串
    'vue/prefer-template': 'error',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 复杂度规则
    // -----------------------------------------------------

    /** 此规则强制 Vue SFC 中模板的最大深度，以帮助提高可维护性并降低复杂性。 */
    'vue/max-template-depth': [
      'off',
      {
        maxDepth: 5 // 最大复杂度为5， 避免嵌套过深
      }
    ],

    /** 此规则强制 Vue SFC 中模板的最大深度，以帮助提高可维护性并降低复杂性。 */
    'vue/max-props': [
      'off',
      {
        maxProps: 5 // 最大复杂度为5， 避免嵌套过深
      }
    ]

    // #endregion
    // -----------------------------------------------------
  }
}
