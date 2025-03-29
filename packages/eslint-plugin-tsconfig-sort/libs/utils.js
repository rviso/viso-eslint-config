/**
 * **********************************************************
 * @file                          utils.js
 * @description                   提供常用的工具函数，例如换行符检测、字符串格式化等
 * @copyright                     lingann
 * **********************************************************
 */

// ========================================================
// #region 核心工具函数
// ========================================================

/**
 * 检测文本中使用的换行符类型
 * @param {string} text - 要检测的文本
 * @returns {'\r\n' | '\n'} 换行符类型（Windows 风格或 Unix 风格）
 * @throws {TypeError} 如果输入不是字符串
 */
function getLineTerminator(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string')
  }

  return text.includes('\r\n') ? '\r\n' : '\n'
}

/**
 * 检查字符串是否为非空字符串
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果是非空字符串则返回 true，否则返回 false
 */
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * 将字符串转换为驼峰命名法（camelCase）
 * @param {string} str - 要转换的字符串
 * @returns {string} 转换后的驼峰命名字符串
 * @throws {TypeError} 如果输入不是字符串
 */
function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  return str
    .replace(/[^a-zA-Z0-9]/g, ' ') // 非字母数字字符替换为空格
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase() // 首字母小写
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // 其他单词首字母大写
    })
    .join('')
}

/**
 * 将字符串转换为短横线命名法（kebab-case）
 * @param {string} str - 要转换的字符串
 * @returns {string} 转换后的短横线命名字符串
 * @throws {TypeError} 如果输入不是字符串
 */
function toKebabCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  return str
    .replace(/[^a-zA-Z0-9]/g, '-') // 非字母数字字符替换为短横线
    .replace(/([A-Z])/g, '-$1') // 大写字母前添加短横线
    .replace(/^-+|-+$/g, '') // 去除首尾多余的短横线
    .toLowerCase() // 转换为小写
}

// #endregion
// ========================================================

module.exports = {
  getLineTerminator,
  isNonEmptyString,
  toCamelCase,
  toKebabCase
}
