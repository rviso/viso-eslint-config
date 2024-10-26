import { ref, computed } from 'vue'

export interface Test {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
}

fn()

const modules = import.meta.glob('./modules/**/*.js', { eager: true })
