
// comma-dangle
const commaDangle = {
  bar: 'baz',
  qux: 'quux',
  bar: 'baz'
}


function braceStyle() {
  return {
    foo: 'bar',
    baz: 'qux'
  }
}

const a = universe.galaxy

d3
  .select('body')
  .selectAll('p')


class MyClass {

  constructor() {
  }

  foo() {
    // ...
  }


  /** 强制使用一致的缩进 */
  bar() {
    // ...
  }
}


export function testFn() {}


const baz = () => 1


// _.chain({}).map(foo)
//   .filter(bar)
//   .value()

// const foo = a && b < 0 || c > 0 || d + 1 === 0


const d = [1, 2, 3]

const ac = 1

let foo, bar, cca


answer = everything
  ? 42
  : foo


if (a) {
  b()
}


function asd() {
  bar()
  return
}


let fooa; let bars
throw new Error('error')
while (a) { break }
for (i = 0; i < 10; i++) {}
for (i = 0; i < 10; i++) {}

/** eslint @stylistic/js/spaced-comment: ["error", "always"]*/
// This is a comment with no whitespace at the beginning

const aasd = `hello, ${people.name}!`


function fooasdasd() { return true }
