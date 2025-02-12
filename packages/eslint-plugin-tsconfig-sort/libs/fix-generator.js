/**
 * **********************************************************
 * @file                          fix-generator.js
 * @description                   生成修复后的排序 JSON 文本，支持分组和中文注释，不删除任何配置
 * @copyright                     lingann
 * **********************************************************
 */

// ========================================================
// #region 依赖导入
// ========================================================

const { detectIndent } = require('./detect-indent')
const { getLineTerminator } = require('./utils')
const Momoa = require('@humanwhocodes/momoa')
const { COMPILER_OPTIONS_GROUP, COMPILER_OPTIONS_DESCRIPTION } = require('./config')

// #endregion
// ========================================================

// ========================================================
// #region 核心功能 - 生成排序后文本
// ========================================================

/**
 * 生成排序后的 JSON 文本
 * @param {Momoa.Ast} sortedAst - 排序后的 AST
 * @param {string} originalText - 原始文本
 * @returns {string} 格式化后的文本
 */
function generateSortedText(sortedAst, originalText) {
  if (!sortedAst || typeof originalText !== 'string') {
    throw new TypeError('Invalid input: sortedAst must be a valid AST and originalText must be a string')
  }

  // 检测原始文本的缩进风格
  const { indent } = detectIndent(originalText)
  // 获取原始文本的换行符
  const lineTerminator = getLineTerminator(originalText)
  // 检测原始文本的引号类型
  const quoteType = detectQuoteType(originalText)

  // 使用 Momoa 打印 AST，保留注释和格式化
  let formattedText = Momoa.print(sortedAst, {
    indent: indent.length || 2,
    lineTerminator,
    comments: true,
    quote: quoteType
  }).trim() + lineTerminator

  // 处理路径中的转义字符
  formattedText = unescapePaths(formattedText)

  // 为 compilerOptions 添加分组和注释
  formattedText = addCompilerOptionsGroup(formattedText)

  return formattedText
}

/**
 * 为 compilerOptions 添加分组和注释
 * @param {string} text - 原始 JSON 文本
 * @returns {string} 添加分组和注释后的文本
 */
function addCompilerOptionsGroup(text) {
  return text.replace(/"compilerOptions":\s*\{([\s\S]*?)\}/g, (match, innerContent) => {
    let groupedContent = ''
    const existingOptions = new Map()
    // 提取所有现有配置
    const optionRegex = /"([^"]+)":\s*([^,}\s]*)\s*(?:,|\})?/g
    let optionMatch = optionRegex.exec(innerContent) // 提取到 while 外部

    while (optionMatch !== null) { // 检查匹配结果
      const optionName = optionMatch[1]
      const optionValue = optionMatch[2].trim()
      existingOptions.set(optionName, optionValue)
      optionMatch = optionRegex.exec(innerContent) // 继续匹配下一个
    }

    // 遍历分组，按顺序添加现有配置
    for (const [groupName, options] of Object.entries(COMPILER_OPTIONS_GROUP)) {
      let groupHasContent = false
      let groupContent = ''

      options.forEach((optionName, index) => {
        if (existingOptions.has(optionName)) {
          groupHasContent = true
          const description = COMPILER_OPTIONS_DESCRIPTION[optionName]
          if (description) {
            groupContent += `/** ${description} */\n`
          }
          // 只在非最后一项时添加逗号
          groupContent += `"${optionName}": ${existingOptions.get(optionName)}${index < options.length - 1 ? ',' : ''}\n`
          existingOptions.delete(optionName) // 标记为已处理
        }
      })

      // 如果当前分组有内容，则添加简洁风格的注释
      if (groupHasContent) {
        groupedContent += `\n// ========================== ${groupName} ==========================\n`
        groupedContent += groupContent
      }
    }

    // 将未分组的配置添加到最后一个分组
    if (existingOptions.size > 0) {
      groupedContent += '\n// ========================== 其他配置 ==========================\n'
      const remainingOptions = Array.from(existingOptions.entries())
      remainingOptions.forEach(([key, value], index) => {
        // 只在非最后一项时添加逗号
        groupedContent += `"${key}": ${value}${index < remainingOptions.length - 1 ? ',' : ''}\n`
      })
    }

    return `"compilerOptions": {${groupedContent}}`
  })
}

// #endregion
// ========================================================

// ========================================================
// #region 辅助工具函数
// ========================================================

/**
 * 检测文本中使用的引号类型
 * @param {string} text - 原始文本
 * @returns {'single' | 'double'} 引号类型（单引号或双引号）
 */
function detectQuoteType(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string')
  }
  return text.includes('"') ? 'double' : 'single'
}

/**
 * 处理路径中的转义字符，将转义字符反转为普通字符
 * @param {string} text - 原始文本
 * @returns {string} 处理后的文本
 */
function unescapePaths(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string')
  }
  return text.replace(/\\\//g, '/')
}

// #endregion
// ========================================================

module.exports = { generateSortedText }
