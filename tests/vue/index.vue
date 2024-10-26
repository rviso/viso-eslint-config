<template>
  <div class="about-container p-[15px]">
    <h1 class="test">
      This is an Home page
    </h1>
    <van-button
      type="primary"
      v="a"
      @click="updateNumber"
      @a="a"
    >
      随机数: {{ number }}
    </van-button>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <van-button type="primary" @click="goAbout">
      前往About页
    </van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { fetchDepartmentList } from '@/api/modules/demo'

const number = ref(0)

const updateNumber = () => {
  number.value = `${Number.parseInt(Math.random() * 10)}`
}

const list = ref([])
const getList = async () => {
  const { data } = await fetchDepartmentList()
  list.value = data
}
getList()
</script>

<style lang="scss" scoped>
.test {
  position: relative;
  font-size: 16px;
  color: $color-main;
}
</style>
