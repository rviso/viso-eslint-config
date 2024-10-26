import { computed, ref } from 'vue'

export interface Test {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export interface OptionProps extends Omit<Test, 'id'> {

  /** Save for customize data */
  [prop: string]: any
}

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
}

fn()

const modules = import.meta.glob('./modules/**/*.js', { eager: true })
