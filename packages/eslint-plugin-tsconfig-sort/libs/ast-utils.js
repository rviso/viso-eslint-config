// ast-utils.js - AST 工具模块
const Momoa = require('@humanwhocodes/momoa')

/**
 * 解析 JSON 为 AST（保留注释和位置信息）
 * @param {string} text - 原始 JSON 文本
 * @returns {Momoa.Ast} 解析后的 AST
 */
function parseToAst(text) {
  return Momoa.parse(text, {
    mode: 'jsonc',
    tokens: true,
    comments: true,
    ranges: true
  })
}

/**
 * 深度克隆 AST
 * @param {Momoa.Ast} ast - 要克隆的 AST
 * @returns {Momoa.Ast} 克隆后的新 AST
 */
function cloneAst(ast) {
  return JSON.parse(JSON.stringify(ast)) // 简易深拷贝
}

/**
 * 比较两个 AST 结构是否相同（忽略位置信息）
 * @param {Momoa.Ast} a - 第一个 AST
 * @param {Momoa.Ast} b - 第二个 AST
 * @returns {boolean} 是否结构相同
 */
/**
 * 深度比较两个 AST 结构（忽略注释差异）
 * @param {Momoa.Node} a - 节点A
 * @param {Momoa.Node} b - 节点B
 * @returns {boolean} 是否结构相同（包含顺序）
 */
function compareAst(a, b) {
  // 快速路径：相同对象或相同基础值
  if (a === b) return true
  if (a === null || b === null) return a === b
  if (typeof a !== 'object' || typeof b !== 'object') return a === b

  // 类型必须相同
  if (a.type !== b.type) return false

  // 根据节点类型处理
  switch (a.type) {
  case 'Object':
    return compareObject(a, b)
  case 'Array':
    return compareArray(a, b)
  case 'Member':
    return compareMember(a, b)
  case 'String':
  case 'Number':
  case 'Boolean':
    return a.value === b.value
  case 'Null':
    return true // Null 节点视为相同
  default:
    // 注释节点直接忽略
    if (isCommentNode(a)) return true
    return false
  }
}

// 检查是否为注释节点
function isCommentNode(node) {
  return node.type === 'LineComment' || node.type === 'BlockComment'
}

// 比较对象节点（严格顺序，忽略注释）
function compareObject(a, b) {
  const aMembers = filterComments(a.members)
  const bMembers = filterComments(b.members)

  if (aMembers.length !== bMembers.length) return false

  // 逐个成员按顺序比较
  return aMembers.every((memberA, index) => compareAst(memberA, bMembers[index]))
}

// 过滤掉注释节点
function filterComments(nodes) {
  return nodes.filter((node) => !isCommentNode(node))
}

// 比较数组成员（严格顺序，忽略注释）
function compareArray(a, b) {
  const aElements = filterComments(a.elements)
  const bElements = filterComments(b.elements)

  if (aElements.length !== bElements.length) return false

  return aElements.every((elemA, index) => compareAst(elemA, bElements[index]))
}

// 比较对象属性成员
function compareMember(a, b) {
  return (
    compareAst(a.name, b.name) && // 比较键名
    compareAst(a.value, b.value) // 比较键值
  )
}

module.exports = {
  parseToAst,
  compareAst,
  cloneAst,
  printAst: Momoa.print,
  isCommentNode
}
