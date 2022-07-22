<template>
  <div class="page-wrapper">
    <header class="page-title mb-md">
      <h1 class="text-gray-700 dark:text-white text-lg">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="subtitle || slots.subtitle" class="pt-sm text-sm">
        <slot name="subtitle">{{ subtitle }}</slot>
      </p>
    </header>
    <slot/>
  </div>
</template>

<script setup>
import {useSlots} from 'vue'
defineProps({
  title: String,
  subtitle: String,
})

const slots = useSlots(['title', 'subtitle'])
</script>
<style scoped lang="scss">

</style>