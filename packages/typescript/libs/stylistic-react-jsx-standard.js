
module.exports = {
  plugins: ['@stylistic/jsx'],
  rules: {

    // -----------------------------------------------------
    // #region 间距规则
    // -----------------------------------------------------

    /** 强制在花括号内使用一致的间距 */
    '@stylistic/jsx/jsx-child-element-spacing': 'off',

    /** 强制在 JSX 属性中一致地使用花括号或不使用花括号 */
    '@stylistic/jsx/jsx-curly-spacing': [
      0,
      {
        when: 'always',
        spacing: {
          objectLiterals: 'never'
        }
      }
    ],

    /** 强制或禁止在 JSX 属性中使用等号周围的空格 */
    '@stylistic/jsx/jsx-equals-spacing': [
      2,
      'never'
    ],

    /** 禁止内联 JSX props 之间有多个空格  */
    '@stylistic/jsx/jsx-props-no-multi-spaces': 'error',

    /** 强制在 JSX 的左括号和右括号内及周围留有空格 */
    '@stylistic/jsx/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 缩进规则
    // -----------------------------------------------------

    '@stylistic/ts/indent': [
      'error',
      2
    ],

    /** 强制使用一致的缩进, 改用“indent”规则 */
    '@stylistic/jsx/jsx-indent': [0, 2],

    /** 在 JSX 中强制 props 缩进 */
    '@stylistic/jsx/jsx-indent-props': [2, 2],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 换行规则
    // -----------------------------------------------------

    /** 在 JSX 属性和表达式中的花括号中强制使用一致的换行符 */
    '@stylistic/jsx/jsx-curly-newline': [
      2,
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],

    /** 强制 JSX 中第一个属性的正确位置	 */
    '@stylistic/jsx/jsx-first-prop-new-line': [
      2,
      'multiline'
    ],

    /** 当 JSX 元素用作函数参数时，强制在 JSX 元素前后换行 */
    '@stylistic/jsx/jsx-function-call-newline': [
      2,
      'multiline'
    ],

    /** 要求或阻止 jsx 元素和表达式后出现新行 */
    '@stylistic/jsx/jsx-newline': [
      0,
      {
        prevent: true,
        allowMultilines: true
      }
    ],

    /** 禁止多行 JSX 周围缺少括号 */
    '@stylistic/jsx/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'parens',
        logical: 'parens',
        prop: 'parens',
        propertyValue: 'parens'
      }
    ],

    /** 强制每行只有一个 JSX 元素 */
    '@stylistic/jsx/jsx-one-expression-per-line': [
      0,
      {
        allow: 'literal'
      }
    ],

    /**	在 JSX 中强制在一行上最大程度地使用 props */
    '@stylistic/jsx/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: 'multiline'
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 括号规则
    // -----------------------------------------------------
    /** 在 JSX 中强制关闭括号的位置 */
    '@stylistic/jsx/jsx-closing-bracket-location': [
      2,
      'line-aligned'
    ],

    /**	当文字本身就足够时，禁止不必要的 JSX 表达式，或者在 JSX 子元素或属性中的文字上强制使用 JSX 表达式  */
    '@stylistic/jsx/jsx-curly-brace-presence': [
      2,
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always'
      }
    ],
    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 标签规则
    // -----------------------------------------------------

    /** 强制多行 JSX 的结束标记位置 */
    '@stylistic/jsx/jsx-closing-tag-location': 'off',

    /** 强制使用 PascalCase 格式定义和引用用户定义的 JSX 组件的编码风格 */
    '@stylistic/jsx/jsx-pascal-case': [
      2,
      {
        allowAllCaps: false,
        allowLeadingUnderscore: false,
        allowNamespace: true,
        ignore: []
      }
    ],

    /** 不允许没有子组件的组件有额外的结束标签 */
    '@stylistic/jsx/jsx-self-closing-comp': [
      2,
      {
        component: true,
        html: true
      }
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 属性顺序规则
    // -----------------------------------------------------

    /** 强制按字母顺序排列道具。 */
    '@stylistic/jsx/jsx-sort-props': [
      2,
      {
        callbacksLast: true, // 回调函数放在最后
        shorthandFirst: true, // 简写属性放在最前面
        shorthandLast: false, // 简写属性放在最后
        multiline: 'ignore',
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        locale: 'auto'
      }
    ]

    // #endregion
    // -----------------------------------------------------
  }
}
