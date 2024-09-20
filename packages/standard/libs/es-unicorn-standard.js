module.exports = {
  plugins: ['unicorn'],
  rules: {
    // -----------------------------------------------------
    // #region unicorn规则
    // @see https://github.com/sindresorhus/eslint-plugin-unicorn
    // -----------------------------------------------------

    /** 禁止嵌套三元表达式 */
    'unicorn/no-nested-ternary': 'error',

    /** 强制自定义错误信息 */
    'unicorn/error-message': 'error',

    /** 要求正则表达式中使用 u 标志 */
    'unicorn/escape-case': 'error',

    /** 禁止使用 Array 构造函数 */
    'unicorn/no-instanceof-array': 'error',

    /** 禁止使用 new Buffer() */
    'unicorn/no-new-buffer': 'error',

    /** 要求数字字面量具有正确的前缀 */
    'unicorn/number-literal-case': 'error',

    /** 要求使用 includes() 而不是 indexOf() 方法 */
    'unicorn/prefer-includes': 'error',

    /** 要求使用 startsWith() 和 endsWith() 方法代替其他更复杂的选项 */
    'unicorn/prefer-starts-ends-with': 'error',

    /** 要求使用 textContent 而不是 innerText */
    'unicorn/prefer-text-content': 'error',

    /** 要求抛出 TypeError 异常而不是 Error */
    'unicorn/prefer-type-error': 'error',

    /** 要求抛出 Error 对象而不是字符串 */
    'unicorn/throw-new-error': 'error',

    /** 禁止then被定义 */
    'unicorn/no-thenable': 'error'

    // #endregion
    // -----------------------------------------------------

  }
}
