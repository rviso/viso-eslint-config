
module.exports = {
  plugins: ['@stylistic/ts', '@stylistic/js'],
  extends: ['plugin:@stylistic/ts/all-extends'],
  rules: {
    // -----------------------------------------------------
    // #region 缩进规则
    // -----------------------------------------------------

    /** 强制使用一致的缩进 */
    '@stylistic/ts/indent': [
      'error',
      2
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 括号规则
    // ----------------------------------------------------

    /** 禁止不必要的括号 */
    '@stylistic/ts/no-extra-parens': ['error', 'functions'],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 逗号规则
    // ----------------------------------------------------

    /** 强制去除尾随逗号 */
    '@stylistic/ts/comma-dangle': [
      'error',
      'never'
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 分号规则
    // -----------------------------------------------------

    /** 强制使用分号 */
    '@stylistic/ts/semi': [
      'error',
      'never'
    ],

    /** 分号风格 */
    '@stylistic/ts/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 引号规则
    // -----------------------------------------------------

    /** 强制对象字面量属性名称使用引号 */
    '@stylistic/ts/quote-props': [
      'error',
      'as-needed'
    ],

    /** 强制使用一致的反勾号、双引号或单引号 */
    '@stylistic/ts/quotes': [
      'error',
      'single'
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 空格规则
    // -----------------------------------------------------

    /** 要求类型注释周围有一致的间距 */
    '@stylistic/ts/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          },
          colon: {
            before: false,
            after: true
          }
        }
      }
    ],

    /** 无多重空格 */
    '@stylistic/js/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],

    /** 强制在大括号中使用一致的空格 */
    '@stylistic/ts/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],

    /** 强制在代码块中使用一致的空格 */
    '@stylistic/ts/space-before-blocks': [
      'error',
      'always'
    ],

    /** 强制块标记和同一行上的下一个标记之间的间距一致 */
    '@stylistic/ts/block-spacing': [
      'error',
      'always'
    ],

    /** 强制在逗号周围使用空格 */
    '@stylistic/ts/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    /** 强制在冒号周围使用空格 */
    '@stylistic/ts/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],

    /** 强制在关键字前后使用一致的空格 */
    '@stylistic/ts/keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    /** 强制在对象大括号中使用一致的空格 */
    '@stylistic/ts/object-curly-spacing': [
      'error',
      'always'
    ],

    /** 强制在冒号后使用一致的空格 */
    '@stylistic/ts/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    /** 强制在函数调用括号前使用一致的空格 */
    '@stylistic/ts/function-call-spacing': ['error', 'never'],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 注释规则
    // -----------------------------------------------------

    /** 强制多行注释的风格 */
    '@stylistic/ts/multiline-comment-style': 'off',

    /** 强制在注释中 // 或 /** 使用一致的空行 */
    '@stylistic/ts/lines-around-comment': [
      'error',
      { beforeBlockComment: true }
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 换行规则
    // -----------------------------------------------------

    /** 强制在大括号内使用一致的换行符 */
    '@stylistic/ts/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 4,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4,
          consistent: true
        },
        ImportDeclaration: {
          multiline: true,
          // minProperties: 4,
          consistent: true
        },
        ExportDeclaration: {
          multiline: true,
          // minProperties: 4,
          consistent: true
        }
      }
    ],

    /** 强制在语句间插入空行 */
    '@stylistic/ts/padding-line-between-statements': [
      'error',
      {
        blankLine: 'never',
        prev: 'function-overload',
        next: 'function'
      }
    ],

    /** 强制对象属性在不同行 */
    '@stylistic/ts/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],

    /** 强制在类成员之间使用一致的换行 */
    '@stylistic/ts/lines-between-class-members': [
      'error',
      'always'
    ],

    /** 强制块语句以空行开始和结束*/
    '@stylistic/ts/padded-blocks': 'off',

    /** 强制最大连续空行数 */
    '@stylistic/js/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 模板规则
    // -----------------------------------------------------

    /** 强制模板字符串中空格的使用 */
    '@stylistic/ts/template-curly-spacing': 'off'

    // #endregion
    // -----------------------------------------------------

  }
}
