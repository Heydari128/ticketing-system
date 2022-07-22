<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
import {computed, reactive, watch, onMounted, nextTick} from 'vue'
import getStore from './store'

const store = reactive(getStore())

const darkClass = 'dark'
const lightClass = 'light'
const switchMode = (value) => {
  console.log('switchMode', value)
  const bodyClass = value ? darkClass : lightClass
  if (bodyClass !== darkClass)
    document.documentElement.classList.remove(darkClass)
  if (bodyClass !== lightClass)
    document.documentElement.classList.remove(lightClass)
  document.documentElement.classList.add(bodyClass)
}

const isDark = computed(() => {
  return store.getters['theme/dark']
})

onMounted(() => {
  console.log('mounted')
  switchMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
})
watch(isDark, () => {
  console.log('isDark', isDark.value)
  switchMode(isDark.value)
})
</script>