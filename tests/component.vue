<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button @click="title = 'Hello Vue 3'">
      Change title
    </button>
    <button style="display: block;" @click="description = 'This is a new description'">
      Change description
      <div>
        <span>
          <label>
            <a />
          </label>
        </span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const title:Ref<string> = ref('Hello World')

const description = ref('This is a description')
</script>
