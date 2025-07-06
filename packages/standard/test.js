// 测试文件 - 包含未使用的导入
import fs from 'fs'
import path from 'path'
import { readFileSync } from 'fs'  // 未使用的导入

// 只使用 fs，不使用 path 和 readFileSync
const content = fs.readFileSync('package.json', 'utf8')
console.log('Package name:', JSON.parse(content).name)
