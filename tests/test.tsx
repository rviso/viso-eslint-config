import React from 'react'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const obj = {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz'
    }

    const hello = (
      <div>
        Hello
        <span>world</span>
      </div>
    )

    const contentContainer = <div className="content" />

    return () =>(<svg ac={<div />} m="a" prop="Hello world" s="s">
      {{ obj }}
    </svg>)

  }
})
