'use strict'

module.exports = {
  extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/strict'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts', '.mts']
      }
    }
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts', '*.mts'],
      parser: '@typescript-eslint/parser'
    }
  ],
  rules: {
    // -----------------------------------------------------
    // #region import 规则
    // -----------------------------------------------------
    '@typescript-eslint/consistent-type-imports': [
      'error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: false
      }
    ], // 类型导入

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
      'error', {
        functions: false,
        classes: false,
        variables: true
      }
    ],

    // #endregion
    // -----------------------------------------------------


    // -----------------------------------------------------
    // #region 注释规则
    // -----------------------------------------------------
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }], // 允许使用 ts-ignore


    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region 接口规则
    // -----------------------------------------------------
    '@typescript-eslint/no-empty-interface': 'error', // 空接口

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'] // 接口定义

    // #endregion
    // -----------------------------------------------------


  }
}
