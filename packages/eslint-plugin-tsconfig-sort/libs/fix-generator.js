// fix-generator.js - 修复生成模块
const { detectIndent } = require('./detect-indent')
const { getLineTerminator } = require('./utils')
const Momoa = require('@humanwhocodes/momoa')

/**
 * 生成排序后的 JSON 文本
 * @param {Momoa.Ast} sortedAst - 排序后的 AST
 * @param {string} originalText - 原始文本
 * @returns {string} 格式化后的文本
 */
function generateSortedText(sortedAst, originalText) {
  const { indent } = detectIndent(originalText)
  const lineTerminator = getLineTerminator(originalText)

  return Momoa.print(sortedAst, {
    indent: 2,
    lineTerminator,
    comments: true, // 关键配置：保留注释
    quote: detectQuoteType(originalText)
  }).trim() + lineTerminator
}

// 检测使用的引号类型
function detectQuoteType(text) {
  return text.includes('"') ? 'double' : 'single'
}

module.exports = { generateSortedText }
