// ast-sorter.js - AST 排序模块
const { COMPILER_OPTIONS_ORDER, ROOT_OPTIONS_ORDER } = require('./config')
// ast-sorter.js
const { isCommentNode } = require('./ast-utils')

/**
 * 递归排序 AST 对象节点并保留注释
 * @param {Momoa.AstNode} ast - 要排序的 AST 节点
 * @param {string} parentKey - 父节点键名
 * @returns {Momoa.AstNode} 排序后的 AST 节点
 */
function sortAstNode(ast, parentKey = 'root') {
  if (ast.type !== 'Object') return ast

  // 步骤 1: 将注释与属性节点绑定分组
  const blocks = groupCommentsWithMembers(ast.members)

  // 步骤 2: 根据排序规则对块进行排序
  const sortedBlocks = sortCommentBlocks(blocks, parentKey)

  // 步骤 3: 递归处理嵌套的 compilerOptions
  processNestedCompilerOptions(sortedBlocks)

  // 步骤 4: 重新组装 AST 成员（保留注释位置）
  ast.members = flattenSortedBlocks(sortedBlocks)

  return ast
}

// ==================== 核心工具方法 ====================

/**
 * 将注释与属性节点绑定分组
 * @param {Momoa.Member[]} members - AST 成员数组
 * @returns {CommentBlock[]} 注释块数组
 */
function groupCommentsWithMembers(members) {
  const blocks = []
  let pendingComments = []

  for (const node of members) {
    if (isCommentNode(node)) {
      pendingComments.push(node)
    } else {
      blocks.push({
        comments: pendingComments,
        member: node,
        sortKey: node.name.value.toLowerCase() // 预计算排序键
      })
      pendingComments = []
    }
  }

  // 处理尾部游离注释
  if (pendingComments.length > 0) {
    blocks.push({
      comments: pendingComments,
      member: null,
      sortKey: '' // 无成员时使用空键
    })
  }

  return blocks
}

/**
 * 对注释块进行排序
 * @param {CommentBlock[]} blocks - 注释块数组
 * @param {string} parentKey - 父节点键名
 * @returns {CommentBlock[]} 排序后的块数组
 */
function sortCommentBlocks(blocks, parentKey) {
  const orderRules = getOrderRules(parentKey)

  return blocks.slice().sort((a, b) => {
    // 处理游离注释（保持原位置）
    if (!a.member || !b.member) {
      return blocks.indexOf(a) - blocks.indexOf(b)
    }

    // 获取排序权重
    const indexA = orderRules.indexOf(a.member.name.value)
    const indexB = orderRules.indexOf(b.member.name.value)

    // 按配置顺序排序
    if (indexA !== -1 && indexB !== -1) return indexA - indexB
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1

    // 字母顺序作为后备
    return a.sortKey.localeCompare(b.sortKey)
  })
}

/**
 * 处理嵌套的 compilerOptions
 * @param {CommentBlock[]} blocks - 已排序的块数组
 */
function processNestedCompilerOptions(blocks) {
  blocks.forEach((block) => {
    if (block.member?.name.value === 'compilerOptions') {
      const optionsNode = block.member.value
      if (optionsNode.type === 'Object') {
        optionsNode.members = sortAstNode(optionsNode, 'compilerOptions').members
      }
    }
  })
}

/**
 * 展开排序后的块为 AST 成员数组
 * @param {CommentBlock[]} blocks - 排序后的块数组
 * @returns {Momoa.Node[]} AST 成员数组
 */
function flattenSortedBlocks(blocks) {
  return blocks.flatMap((block) => {
    const nodes = []
    // 保留注释原始顺序
    if (block.comments.length > 0) {
      nodes.push(...block.comments)
    }
    // 添加成员节点（如果有）
    if (block.member) {
      nodes.push(block.member)
    }
    return nodes
  })
}

// ==================== 辅助方法 ====================

function getOrderRules(parentKey) {
  return parentKey === 'compilerOptions'
    ? COMPILER_OPTIONS_ORDER
    : ROOT_OPTIONS_ORDER
}

module.exports = { sortAstNode }
