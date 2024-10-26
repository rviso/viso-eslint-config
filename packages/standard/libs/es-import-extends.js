module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['import-newlines'],
  rules: {
    // -----------------------------------------------------
    // #region import 规则
    // -----------------------------------------------------

    /** 强制对 import 语句中的成员进行排序 */
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single'
        ],
        allowSeparatedGroups: false
      }
    ],

    /** 禁止使用命名导出 */
    'import/named': 'off',

    /** 强制模块引入的顺序 */
    'import/order': 'error',

    /** 强制所有 import 语句放在文件的最顶部 */
    'import/first': 'error',

    /** 禁止使用绝对路径导入模块 */
    'import/no-absolute-path': 'error',

    /** 禁止使用 let 和 var 导出变量 */
    'import/no-mutable-exports': 'off',

    /** 确保导入的模块可以解析 */
    'import/no-unresolved': [
      'off',
      {
        commonjs: true,
        ignore: [
          '^@/',
          '^@@/',
          '^@\\w+/\\w+',
          '^@\\w+'
        ]
      }
    ],

    /** 禁止将默认导出的名称用作命名导出的成员 */
    'import/no-named-as-default-member': 'off',

    /** 禁止将默认导出的名称用作命名导出 */
    'import/no-named-as-default': 'off',

    /** 禁止使用命名空间导出 */
    'import/namespace': 'off',


    // #endregion
    // -----------------------------------------------------

    // -----------------------------------------------------
    // #region import-newlines 规则
    // -----------------------------------------------------

    /** 强制 import 语句换行 */
    'import-newlines/enforce': [
      'error',
      {
        items: 3,
        'max-len': 120,
        semi: false,
        allowBlankLines: true
      }
    ]

    // #endregion
    // -----------------------------------------------------

  }
}
