// index.js - 主模块
const { sortAstNode } = require('./ast-sorter')
const {
  parseToAst,
  cloneAst,
  printAst
} = require('./ast-utils')
const { generateSortedText } = require('./fix-generator')

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce sorted tsconfig.json properties',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',
    schema: []
  },

  create(context) {
    return {
      Program(node) {
        const sourceCode = context.getSourceCode()
        const text = sourceCode.getText()

        try {
          // 解析阶段
          const originalAst = parseToAst(text)
          const sortedAst = cloneAst(originalAst)
          sortedAst.body = sortAstNode(sortedAst.body)

          // 比较阶段
          if (printAst(originalAst) === printAst(sortedAst)) {
            return
          }

          // 报告问题
          context.report({
            node,
            message: 'tsconfig.json 属性应按规范顺序排列',
            fix: (fixer) => generateFix(fixer, sortedAst, text)
          })
        } catch (e) {
          context.report({ node, message: `解析错误: ${e.message}` })
        }
      }
    }
  }
}

// 生成修复内容
function generateFix(fixer, sortedAst, originalText) {
  const sortedText = generateSortedText(sortedAst, originalText)
  return fixer.replaceTextRange([0, originalText.length], sortedText)
}
