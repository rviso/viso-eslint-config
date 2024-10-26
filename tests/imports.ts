

import {
  computed,
  watch,
  ref,
  reactive
} from 'vue'

const state = reactive({
  count: 0
})

const count = ref(0)

watch(count, (newVal, oldVal) => {
  console.log('count changed', newVal, oldVal)
})

const double = computed(() => count.value * 2)

console.log(double.value)
