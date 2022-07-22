<template>
  <span :class="`material-symbols-outlined ${props.color || ''} ${props.size || 'text-2xl'}`">{{ name }}</span>
</template>

<script setup lang="ts">
interface props {
  name: String,
  size?: String,
  color?: String
}

const props = defineProps<props>()
</script>
