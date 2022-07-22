<template>
<span class="svg-icon" :style="{width: size, height: size}">
  <slot />
</span>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    size: {
      type: String,
      default: '48px'
    }
  }
}
</script>
<style lang="scss">
.svg-icon {
  display: inline-flex;
  justify-content: center;
  align-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
