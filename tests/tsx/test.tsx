import { initializeApp } from '@core/app'
import { logger } from '@core/logger'
import { createConnection } from '@server/database'
import { createServer } from '@server/node'
import { Alert } from '@ui/Alert'
import { Popup } from '@ui/Popup'
import { debounce, reduce } from 'lodash'
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef 
} from 'react'
import { defineComponent } from 'vue'

import { Message } from '../Message'
import { add, filter, repeat } from '../utils'
export default defineComponent({
  setup() {
    const obj = {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz'
    }

    const hello = (
      <div>
        Lack of spacing is<a>explicit</a>
      </div>
    )

    const contentContainer = <div className="content" />

    return () => (
      <svg ac={<div />} m="a" prop="Hello world" s="s">
        {{ obj }}
      </svg>
    )

  }
})
