/**
 * *******************************************************************************************
 * @file                        ast-sorter.js
 * @description                 AST 排序模块，支持对 AST 对象节点进行递归排序，并保留注释位置
 * @copyright                   lingann
 * *******************************************************************************************
 */

const { COMPILER_OPTIONS_ORDER, ROOT_OPTIONS_ORDER } = require('./config')
const { isCommentNode } = require('./ast-utils')

// ========================================================
// #region AST 排序核心方法
// ========================================================

/**
 * 递归排序 AST 对象节点并保留注释
 * @param {Momoa.AstNode} ast - 要排序的 AST 节点
 * @param {string} parentKey - 父节点键名
 * @returns {Momoa.AstNode} 排序后的 AST 节点
 */
function sortAstNode(ast, parentKey = 'root') {
  // 非对象节点直接返回，无需排序
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

// #endregion
// ========================================================

// ========================================================
// #region 注释与属性节点绑定分组相关方法
// ========================================================

/**
 * 将注释与属性节点绑定分组
 * @param {Momoa.Member[]} members - AST 成员数组
 * @returns {CommentBlock[]} 注释块数组
 */
function groupCommentsWithMembers(members) {
  const blocks = []
  let pendingComments = [] /** 当前暂存的注释节点数组 */

  for (const node of members) {
    if (isCommentNode(node)) {
      // 如果是注释节点，暂存到 pendingComments 中
      pendingComments.push(node)
    } else {
      // 如果是属性节点，创建一个新的注释块
      blocks.push({
        comments: pendingComments,
        member: node,
        sortKey: node.name.value.toLowerCase() /** 预计算排序键 */
      })
      pendingComments = [] // 清空暂存的注释节点
    }
  }

  // 处理尾部游离注释
  if (pendingComments.length > 0) {
    blocks.push({
      comments: pendingComments,
      member: null, /** 无成员时标记为 null */
      sortKey: '' /** 无成员时使用空键 */
    })
  }

  return blocks
}

// #endregion
// ========================================================

// ========================================================
// #region 注释块排序相关方法
// ========================================================

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

// #endregion
// ========================================================

// ========================================================
// #region 嵌套 compilerOptions 处理相关方法
// ========================================================

/**
 * 处理嵌套的 compilerOptions
 * @param {CommentBlock[]} blocks - 已排序的块数组
 */
function processNestedCompilerOptions(blocks) {
  blocks.forEach((block) => {
    if (block.member?.name.value === 'compilerOptions') {
      const optionsNode = block.member.value
      if (optionsNode.type === 'Object') {
        // 递归排序 compilerOptions 下的成员
        optionsNode.members = sortAstNode(optionsNode, 'compilerOptions').members
      }
    }
  })
}

// #endregion
// ========================================================

// ========================================================
// #region 展开排序后的块相关方法
// ========================================================

/**
 * 展开排序后的块为 AST 成员数组
 * @param {CommentBlock[]} blocks - 排序后的块数组
 * @returns {Momoa.Node[]} AST 成员数组
 */
function flattenSortedBlocks(blocks) {
  if (!Array.isArray(blocks)) {
    throw new TypeError('Expected an array of CommentBlock objects')
  }

  const nodes = []

  // 遍历所有块，确保每个块的成员节点都被正确处理
  blocks.forEach((block) => {
    // 如果存在注释节点，先添加注释
    if (Array.isArray(block.comments) && block.comments.length > 0) {
      nodes.push(...block.comments)
    }

    // 如果存在成员节点，则添加成员节点
    if (block.member) {
      nodes.push(block.member)
    }
  })

  return nodes
}

// #endregion
// ========================================================

// ========================================================
// #region 辅助方法
// ========================================================

/**
 * 根据父节点键名获取排序规则
 * @param {string} parentKey - 父节点键名
 * @returns {string[]} 排序规则数组
 */
function getOrderRules(parentKey) {
  return parentKey === 'compilerOptions' ? COMPILER_OPTIONS_ORDER : ROOT_OPTIONS_ORDER
}

// #endregion
// ========================================================

module.exports = { sortAstNode }
