## cloneDeep

`cloneDeep`
深拷贝

### 参数

| 参数    | 说明         | 类型 | 默认值 |
| ------- | ------------ | ---- | ------ |
| `value` | 要深拷贝的值 | any  | -      |

### 返回值

**any** - 返回拷贝后的值

### 示例

```js
import { cloneDeep } from '@gl-design/utils'
const objects = [{ a: 1 }, { b: 2 }]

const deep = cloneDeep(objects)
console.log(deep[0] === objects[0])
// => false
```
