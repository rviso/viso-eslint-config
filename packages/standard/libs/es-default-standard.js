module.exports = {
  rules: {
    // -----------------------------------------------------
    // #region 命名规则
    // -----------------------------------------------------

    /** 强制驼峰命名 */
    camelcase: 'warn',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 变量规则
    // -----------------------------------------------------

    /** 禁止使用未声明的变量 */
    'no-undef': 'error',

    /** 禁止将变量初始化为 undefined */
    'no-undef-init': 'error',

    /** 要求所有的 var 声明出现在它们所在的作用域顶部 */
    'vars-on-top': 'error',

    /** 禁止使用 var，使用 let 或 const 代替 */
    'no-var': 'warn',

    /** 警告未使用的变量 */
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],


    /** 禁止给 const 赋值 */
    'no-const-assign': 'error',

    /** 允许对参数重新赋值 */
    'no-param-reassign': 'warn',

    /** 强制把变量的使用限制在其定义的作用域范围内 */
    'block-scoped-var': 'error',

    /** 要求使用 const 声明那些声明后不再被修改的变量 */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],

    /** 禁止在变量定义之前使用它们 */
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],

    /** 防止变量声明覆盖外部作用域中的变量 */
    'no-shadow': 'off',

    /** 禁止删除变量 */
    'no-delete-var': 'error',

    /** 禁止给全局变量赋值 */
    'no-global-assign': 'warn',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 类规则
    // -----------------------------------------------------

    /** 构造函数调用时必须使用 super() */
    'constructor-super': 'off',

    /** 禁止给类赋值 */
    'no-class-assign': 'error',

    /** 禁止重复的类成员 */
    'no-dupe-class-members': 'error',


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 正则规则
    // -----------------------------------------------------

    /** 禁止使用控制字符正则表达式 */
    'no-control-regex': 'error',

    /** 禁止使用无效的正则表达式 */
    'no-invalid-regexp': 'error',

    /** 推荐使用正则表达式字面量 */
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 比较语句规则
    // -----------------------------------------------------

    /** 要求使用 === 和 !== */
    eqeqeq: [
      'error',
      'smart'
    ],

    /** 禁止使用常量条件 */
    'no-constant-condition': ['error', { checkLoops: false }],

    /** 禁止与自身比较 */
    'no-self-compare': 'error',

    /** 禁止使用不安全的否定 */
    'no-unsafe-negation': 'error',

    /** 禁止比较 -0 */
    'no-compare-neg-zero': 'error',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 条件语句规则
    // -----------------------------------------------------

    /** 禁止条件表达式中出现赋值操作符 */
    'no-cond-assign': [
      'error',
      'always'
    ],

    /** 不允许在 case 子句中使用词法声明 */
    'no-case-declarations': 'error',

    /** 禁止重复的 case 标签 */
    'no-duplicate-case': 'error',

    /** switch 语句中的 default 必须放在最后 */
    'default-case-last': 'error',

    /** 禁止通过 fallthrough 进入下一个 case */
    'no-fallthrough': 'error',


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 数字规则
    // -----------------------------------------------------

    /** 禁止精度损失 */
    'no-loss-of-precision': 'error',

    /** 禁止浮点数缺少整数部分 */
    'no-floating-decimal': 'error',

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 字符串规则
    // -----------------------------------------------------

    /** 禁止使用多行字符串 */
    'no-multi-str': 'error',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 字模板规则
    // -----------------------------------------------------

    /** 要求使用模板字面量而非字符串连接 */
    'prefer-template': 'error',

    /** 要求或禁止模板字符串中的嵌入表达式周围空格的使用 */
    'template-curly-spacing': 'error',


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 解构赋值规则
    // -----------------------------------------------------

    /** 推荐使用解构赋值 */
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: false
        },
        AssignmentExpression: {
          array: false
        }
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 语法结构规则
    // -----------------------------------------------------

    /** 禁用 with 语句 */
    'no-with': 'error',

    /** 禁用 void 操作符 */
    'no-void': 'error',

    /** 禁用不必要的转义字符 */
    'no-useless-escape': 'warn',

    /** 禁止直接使用 Object.prototypes 的内置属性 */
    'no-prototype-builtins': 'error',

    /** 禁止使用特定的语法 */
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'WithStatement'
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 对象规则
    // -----------------------------------------------------

    /** 禁止对象字面量中出现重复的键 */
    'no-dupe-keys': 'error',

    /** 要求或禁止对象字面量中方法和属性使用简写语法 */
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 数组规则
    // -----------------------------------------------------

    /** 禁止使用数组构造函数 */
    'no-array-constructor': 'error',

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region Promise规则
    // -----------------------------------------------------

    /** 禁止使用异步函数作为 Promise 的执行器 */
    'no-async-promise-executor': 'error',


    /** 允许在某些情况下使用 return await */
    'no-return-await': 'warn',

    /** 禁止使用不带 await 表达式的 async 函数 */
    'require-await': 'error',

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 运算符规则
    // -----------------------------------------------------

    /** 要求使用 ** 操作符代替 Math.pow */
    'prefer-exponentiation-operator': 'error',

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 三元表达式
    // -----------------------------------------------------

    /** 禁止不必要的三元表达式 */
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 函数规则
    // -----------------------------------------------------

    /** 禁止使用 arguments.caller 或 arguments.callee */
    'no-caller': 'error',

    /** 限制函数最多参数数量为 4 */
    'max-params': ['warn', 4],

    /** 禁止重复的参数 */
    'no-dupe-args': 'error',

    /** 禁止给函数赋值 */
    'no-func-assign': 'error',

    /** 限制每个函数不超过 50 行代码 */
    // 'max-lines-per-function': ['error', 50],

    /** 强制数组方法的回调函数中有 return 语句 */
    'array-callback-return': [
      'error',
      {

        /** 允许隐式 return */
        allowImplicit: true,

        /** 检查 forEach 方法中是否有 return 语句 */
        checkForEach: true,

        /** 允许使用 void 0 作为返回值 */
        allowVoid: true
      }
    ],

    /** 禁止在 return 语句中使用赋值语句 */
    'no-return-assign': 'error',

    /** 要求回调函数使用箭头函数 */
    'prefer-arrow-callback': [
      'error',
      {

        /** 允许使用具名函数作为回调 */
        allowNamedFunctions: true,

        /** 允许不绑定 this 的箭头函数 */
        allowUnboundThis: true
      }
    ],

    /** 关闭对 return 语句一致性的要求 */
    'consistent-return': 'off',


    /** 要求使用剩余参数而不是 arguments */
    'prefer-rest-params': 'error',

    /** 要求使用扩展运算符而非 .apply() */
    'prefer-spread': 'off',

    /** 禁止多余的绑定 */
    'no-extra-bind': 'error',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 异常捕获规则
    // -----------------------------------------------------

    /** 禁止在 finally 块中抛出或返回 */
    'no-unsafe-finally': 'error',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 调试规则
    // -----------------------------------------------------


    /** 警告使用 debugger */
    'no-debugger': 'warn',

    /** 警告使用 console，允许使用 console.warn 和 console.error */
    'no-console': [
      'warn',
      {
        allow: [
          'warn',
          'error'
        ]
      }
    ],

    /** 警告使用 alert、confirm 和 prompt */
    'no-alert': 'warn',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 异味检测规则
    // -----------------------------------------------------

    /** 限制圈复杂度 */
    complexity: [
      'off',
      15
    ],

    /** 禁止扩展原生对象 */
    'no-extend-native': 'error'
    // #endregion
    // -----------------------------------------------------

  }
}
