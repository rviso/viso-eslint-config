/**
 * **********************************************************
 * @file                          detect-indent.js
 * @description                   用于检测文本中使用缩进类型（空格或Tab）及其数量的工具模块
 * @copyright                     lingann
 * **********************************************************
 */

// ====================================
// #region 常量定义
// ====================================

/** 缩进类型：空格 */
const INDENT_TYPE_SPACE = 'space'

/** 缩进类型：Tab */
const INDENT_TYPE_TAB = 'tab'

/** 缩进匹配正则（匹配行首的空格或Tab） */
const INDENT_REGEX = /^(?:( )+|\t+)/

// #endregion
// ====================================

// ====================================
// #region 核心功能 - 缩进检测
// ====================================

/**
 * 生成缩进统计Map
 * @param {string} text - 要分析的文本
 * @param {boolean} ignoreSingleSpaces - 是否忽略单个空格
 * @returns {Map<string, [number, number]>} 缩进统计Map，key为缩进类型+数量，值为[使用次数, 权重]
 */
function makeIndentsMap(text, ignoreSingleSpaces) {

  /** @type {Map<string, [number, number]>} */
  const indentsMap = new Map()

  /** 前一行缩进大小 */
  let previousIndentSize = 0

  /** 前一行缩进类型 */
  let previousIndentType = ''

  // 逐行分析
  for (const line of text.split(/\n/g)) {
    if (!line) continue // 忽略空行

    const matches = line.match(INDENT_REGEX)
    if (!matches) {
      previousIndentSize = 0
      previousIndentType = ''
      continue
    }

    const indentSize = matches[0].length
    const indentType = matches[1] ? INDENT_TYPE_SPACE : INDENT_TYPE_TAB

    // 忽略单个空格（如果开启）
    if (ignoreSingleSpaces && indentType === INDENT_TYPE_SPACE && indentSize === 1) {
      continue
    }

    // 检测到缩进类型变化时重置统计
    if (indentType !== previousIndentType) {
      previousIndentSize = 0
    }

    // 计算缩进差异
    const indentDifference = indentSize - previousIndentSize
    previousIndentSize = indentSize
    previousIndentType = indentType

    // 跳过无变化的情况
    if (indentDifference === 0) continue

    // 生成Map键
    const absoluteDifference = Math.abs(indentDifference)
    const mapKey = encodeIndentsKey(indentType, absoluteDifference)

    // 更新统计数据
    const currentStats = indentsMap.get(mapKey) || [0, 0]
    currentStats[0] += 1 // 使用次数
    currentStats[1] += Math.abs(indentDifference) * 10 // 权重
    indentsMap.set(mapKey, currentStats)
  }

  return indentsMap
}

/**
 * 检测文本中使用的主要缩进类型和数量
 * @param {string} text - 要分析的文本
 * @returns {{
 *   amount: number,
 *   type: 'space' | 'tab',
 *   indent: string
 * }} 检测结果
 */
function detectIndent(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string')
  }

  // 优先忽略单个空格进行检测
  let indentsMap = makeIndentsMap(text, true)

  // 如果未检测到任何缩进，则关闭单空格忽略重新检测
  if (indentsMap.size === 0) {
    indentsMap = makeIndentsMap(text, false)
  }

  // 获取最常使用的缩进键
  const mostUsedKey = getMostUsedKey(indentsMap)

  // 初始化默认返回值
  const result = {
    amount: 0,
    type: INDENT_TYPE_SPACE,
    indent: ''
  }

  if (mostUsedKey) {
    const { type, amount } = decodeIndentsKey(mostUsedKey)
    result.type = type
    result.amount = amount
    result.indent = makeIndentString(type, amount)
  }

  return result
}

// #endregion
// ====================================

// ====================================
// #region 辅助工具函数
// ====================================

/**
 * 生成缩进统计Map的键
 * @param {'space' | 'tab'} indentType - 缩进类型
 * @param {number} indentAmount - 缩进数量
 * @returns {string} 编码后的键
 */
function encodeIndentsKey(indentType, indentAmount) {
  const typeChar = indentType === INDENT_TYPE_SPACE ? 's' : 't'
  return `${typeChar}${indentAmount}`
}

/**
 * 解码缩进统计Map的键
 * @param {string} key - 编码后的键
 * @returns {{
 *   type: 'space' | 'tab',
 *   amount: number
 * }} 解码后的信息
 */
function decodeIndentsKey(key) {
  const type = key.startsWith('s') ? INDENT_TYPE_SPACE : INDENT_TYPE_TAB
  const amount = Number(key.slice(1))
  return { type, amount }
}

/**
 * 获取最常使用的缩进键
 * @param {Map<string, [number, number]>} indentsMap - 缩进统计Map
 * @returns {string | undefined} 最常使用的键
 */
function getMostUsedKey(indentsMap) {
  let resultKey
  let maxUsed = 0
  let maxWeight = 0

  for (const [key, [usedCount, weight]] of indentsMap) {
    if (usedCount > maxUsed || (usedCount === maxUsed && weight > maxWeight)) {
      maxUsed = usedCount
      maxWeight = weight
      resultKey = key
    }
  }

  return resultKey
}

/**
 * 生成指定类型的缩进字符串
 * @param {'space' | 'tab'} type - 缩进类型
 * @param {number} amount - 缩进数量
 * @returns {string} 生成的缩进字符串
 */
function makeIndentString(type, amount) {
  const indentChar = type === INDENT_TYPE_SPACE ? ' ' : '\t'
  return indentChar.repeat(amount)
}

// #endregion
// ====================================

module.exports = {
  detectIndent
}
