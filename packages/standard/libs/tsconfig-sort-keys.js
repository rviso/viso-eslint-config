module.exports = {
  plugins: ['tsconfig-sort'],
  rules: {
    'jsonc/sort-keys': 'off', // 关闭其他排序规则
    'tsconfig-sort/tsconfig-sort': 'error' // 启用规则
  }
}
