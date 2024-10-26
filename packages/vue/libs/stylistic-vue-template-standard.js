'use strict'

module.exports = {
  rules: {

    // -----------------------------------------------------
    // #region 缩进规则
    // -----------------------------------------------------

    /** 强制使用一致的2个空格缩进 */
    'vue/html-indent': ['error', 2],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 空格规则
    // -----------------------------------------------------

    // 对象大括号空格
    'vue/object-curly-spacing': ['error', 'always'],

    // 逗号后面必须有空格
    'vue/comma-spacing': ['error', { before: false, after: true }],

    // 箭头函数空格
    'vue/arrow-spacing': ['error', { before: true, after: true }],

    // 数组括号内不允许有空格
    'vue/array-bracket-spacing': ['error', 'never'],

    // 模板大括号空格
    'vue/template-curly-spacing': 'error',

    // 括号内不允许有空格
    'vue/space-in-parens': ['error', 'never'],

    // 块级空格
    'vue/block-spacing': ['error', 'always'],

    // 操作符前后必须有空格
    'vue/space-infix-ops': 'error',

    // 一元运算符前后必须有空格
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],

    // 1tbs
    'vue/brace-style': [
      'error',
      'stroustrup',
      { allowSingleLine: true }
    ],

    // 禁止不规则的空白
    'vue/no-irregular-whitespace': 'error',

    // 关键字空格
    'vue/keyword-spacing': ['error', { before: true, after: true }],

    // 强制在对象字面量的键和值之间使用一致的间距
    'vue/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 换行规则
    // -----------------------------------------------------
    // 最大长度限制
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 120,
        tabWidth: 2,
        comments: 120,
        ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true
      }
    ],

    // 属性换行
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],

    // 强制第一个属性的位置
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below'
      }
    ],

    // 单行html元素内容换行
    'vue/singleline-html-element-content-newline': 'warn',

    // 多行html元素内容换行
    'vue/multiline-html-element-content-newline': 'warn',

    // 块级元素之间必须有空行
    'vue/padding-line-between-blocks': ['warn', 'always'],

    // 对象大括号换行
    'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],


    // 对象属性换行
    'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],


    // 块级标签换行
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always'
      }
    ],

    // 操作符换行
    'vue/operator-linebreak': 'off',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 注释规则
    // -----------------------------------------------------
    // html注释内容空格
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-']
      }
    ],
    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 引号规则
    // -----------------------------------------------------

    // 强制对象字面量属性名称使用引号
    'vue/quote-props': 'off',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 括号规则
    // -----------------------------------------------------

    // 禁止不必要的括号
    'vue/no-extra-parens': ['error', 'functions'],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 逗号规则
    // -----------------------------------------------------

    // 逗号风格
    'vue/comma-style': ['error', 'last'],

    // 逗号
    'vue/comma-dangle': 'off',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 点号规则
    // -----------------------------------------------------

    // 使用点号表示法
    'vue/dot-location': 'off',

    // 使用点号表示法
    'vue/dot-notation': ['error', { allowKeywords: true }]
    // #endregion
    // -----------------------------------------------------


  }
}
