// eslint typescript 文件检查

// 测试用例1, 未使用的变量
const a = 1
const b = 2
console.log(a)

// 测试用例2, 未使用的函数参数
export function foo(a: number, b: number) {
  console.log(a)
}

// 测试用例3, 未使用的函数返回值
export function bar() {
  return 1
}

// 测试用例4, 未使用的类方法
export class Test {
  foo() {
    console.log(1)
  }
}

// 测试用例5, 未使用的类属性
export class Test2 {
  a = 1
}

// 测试用例6, 正则表达式错误
const reg = /\\/
