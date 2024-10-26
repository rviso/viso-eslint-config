
import {
  computed,
  reactive,
  ref,
  watch 
} from 'vue'

const state = reactive({
  count: 0
})

const count = ref(0)

watch(count, (newVal, oldVal) => {
  console.log('count changed', newVal, oldVal)
})

const double = computed(() => count.value * 2)

console.log( double.value)

const x1 = 5 // comment
const x12 = 5

/* multiline
 * comment
 */
