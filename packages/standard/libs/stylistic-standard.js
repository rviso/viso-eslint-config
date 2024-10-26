
module.exports = {
  plugins: ['@stylistic/js'],
  extends: ['plugin:@stylistic/js/all-extends'],
  rules: {
    // -----------------------------------------------------
    // #region 长度规则
    // -----------------------------------------------------

    /** 强制一行的最大长度 */
    '@stylistic/js/max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 800,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 缩进规则
    // -----------------------------------------------------

    /** 强制使用一致的缩进 */
    '@stylistic/js/indent': [
      'error',
      2
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 逗号规则
    // -----------------------------------------------------

    /** 强制使用一致的反勾号、双引号或单引号 */
    '@stylistic/js/comma-style': [
      'error',
      'last'
    ],

    /** 强制去除尾随逗号 */
    '@stylistic/js/comma-dangle': [
      'error',
      'never'
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region括号规则
    // -----------------------------------------------------

    /** 强制在箭头函数体周围使用大括号 */
    '@stylistic/js/no-extra-parens': ['error', 'functions'],
    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 分号规则
    // -----------------------------------------------------

    /** 强制使用分号 */
    '@stylistic/js/semi': [
      'error',
      'never'
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 引号规则
    // -----------------------------------------------------

    /** 强制对象字面量属性名称使用引号 */
    '@stylistic/js/quote-props': [
      'error',
      'as-needed'
    ],

    /** 强制使用一致的反勾号、双引号或单引号 */
    '@stylistic/js/quotes': [
      'error',
      'single'
    ],


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 空格规则
    // -----------------------------------------------------

    /** 强制在大括号中使用一致的空格 */
    '@stylistic/js/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],

    /** 强制块标记和同一行上的下一个标记之间的间距一致 */
    '@stylistic/js/block-spacing': [
      'error',
      'always'
    ],


    /** 强制在计算的属性的方括号中使用一致的空格 */
    '@stylistic/js/computed-property-spacing': [
      'error',
      'never'
    ],

    /** 强制在逗号周围使用空格 */
    '@stylistic/js/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    /** 强制在冒号周围使用空格 */
    '@stylistic/js/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],

    /** 强制在关键字前后使用一致的空格 */
    '@stylistic/js/keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    /** 强制在对象大括号中使用一致的空格 */
    '@stylistic/js/object-curly-spacing': [
      'error',
      'always'
    ],


    /** 强制在冒号后使用一致的空格 */
    '@stylistic/js/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 注释规则
    // -----------------------------------------------------

    /** 强制多行注释的风格 */
    '@stylistic/js/multiline-comment-style': 'off',


    /** 强制在注释中 // 或 /** 使用一致的空行 */
    '@stylistic/js/lines-around-comment': [
      'error',
      { beforeBlockComment: true }
    ],

    /** 强制注释周围有空行 */
    '@stylistic/js/spaced-comment': [
      'error',
      'always'
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 换行规则
    // -----------------------------------------------------

    /** 强制在点号之前和之后一致的换行 */
    '@stylistic/js/dot-location': [
      'error',
      'property'
    ],

    '@stylistic/js/newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 }
    ],


    /** 强制数组元素间换行 */
    '@stylistic/js/array-element-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
        minItems: 3
      }
    ],

    /** 要求文件末尾保留一行空行 */
    '@stylistic/js/eol-last': [
      'error',
      'always'
    ],


    /** 强制使用一致的换行风格 */
    '@stylistic/js/linebreak-style': [
      'error',
      'unix'
    ],

    /** 强制操作符使用一致的换行符风格 */
    '@stylistic/js/operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],

    /** 强制在大括号内使用一致的换行符 */
    '@stylistic/js/object-curly-newline': [
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

    /** 强制多行的三元表达式的换行 */
    '@stylistic/js/multiline-ternary': [
      'error',
      'always-multiline'
    ],

    /** 强制在函数括号内使用一致的换行 */
    '@stylistic/js/function-call-argument-newline': [
      'error',
      'consistent'
    ],

    /** 强制在类成员之间使用一致的换行 */
    '@stylistic/js/lines-between-class-members': [
      'error',
      'always'
    ],

    /** 强制在语句间插入空行 */
    '@stylistic/js/padding-line-between-statements': [
      'off',
      {
        blankLine: 'always',
        prev: 'STATEMENT_TYPE',
        next: 'STATEMENT_TYPE'
      }
    ],

    /** 强制对象属性在不同行 */
    '@stylistic/js/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],

    /** 强制块语句以空行开始和结束*/
    '@stylistic/js/padded-blocks': 'off',

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 混合运算符规则
    // -----------------------------------------------------

    /** 禁止混合使用不同的操作符 */
    '@stylistic/js/no-mixed-operators': [
      'warn',
      {
        groups: [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 模板规则
    // -----------------------------------------------------

    /** 强制模板字符串中空格的使用 */
    '@stylistic/js/template-curly-spacing': 'off'

    // #endregion
    // -----------------------------------------------------


  }
}
