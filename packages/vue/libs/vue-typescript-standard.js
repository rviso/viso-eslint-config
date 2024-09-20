module.exports = {
  extends: ['plugin:import/typescript'],
  rules: {
    // #region TypeScript规则
    // ------------------TypeScript相关------------------
    // 缩进
    '@typescript-eslint/indent': 'off',
    // 类型导入
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }]
    // #endregion
  }
}

