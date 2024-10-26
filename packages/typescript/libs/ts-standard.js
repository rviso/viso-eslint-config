'use strict'

module.exports = {
  extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/strict'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.d.ts',
          '.mts'
        ]
      }
    }
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.d.ts',
        '*.mts'
      ],
      parser: '@typescript-eslint/parser'
    }
  ],
  rules: {
    // -----------------------------------------------------
    // #region import 规则
    // -----------------------------------------------------

    /** 强制一致的类型导入 */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false
      }
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region export 规则
    // -----------------------------------------------------

    /** 禁止使用默认导出 */
    // '@typescript-eslint/consistent-type-exports': [
    //   'error',
    //   {
    //     fixMixedExportsWithInlineTypeSpecifier: true
    //   }
    // ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 命名规则
    // -----------------------------------------------------

    /** 禁止未使用的变量 */
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    /** 禁止重复声明 */
    '@typescript-eslint/no-redeclare': 'error',

    /** 禁止在变量定义之前使用它们 */
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true
      }
    ],

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 对象规则
    // -----------------------------------------------------

    /** 禁止动态删除对象属性 */
    '@typescript-eslint/no-dynamic-delete': 'warn',

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 注释规则
    // -----------------------------------------------------
    /** 禁止使用 @ts-ignore 注释 */
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],


    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 接口规则
    // -----------------------------------------------------

    /** 禁止空接口 */
    '@typescript-eslint/no-empty-interface': 'off',

    /** 优先使用接口而不是类型别名,该规则已被弃用，以支持更全面的@typescript-eslint/no-empty-object-type规则。 */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    /** 禁止空对象类型 */
    '@typescript-eslint/no-empty-object-type': 'off',


    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 类型推断规则
    // -----------------------------------------------------

    /** 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明。 */
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 迭代器规则
    // -----------------------------------------------------

    /** 禁止使用 for 循环 */
    '@typescript-eslint/prefer-for-of': 'off',

    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 函数规则
    // -----------------------------------------------------

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [
          'protected-constructors',
          'private-constructors',
          'decoratedFunctions',
          'overrideMethods'
        ]
      }
    ],


    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 类规则
    // -----------------------------------------------------

    /** 禁止使用不严格的类 */
    '@typescript-eslint/no-extraneous-class': 'off',

    // #endregion
    // -----------------------------------------------------

    /** 禁止未使用的表达式 */
    '@typescript-eslint/no-unused-expressions': 'off'
  }
}
