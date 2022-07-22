<template>
  <div
    id="app"
    class="w-screen h-screen"
  >
    <slot />
  </div>
</template>

<script>
import themeMixin from '~/mixins/themeMixin'
import baseLayoutMixin from '~/mixins/baseLayoutMixin'

export default {
  name: 'operatorLayout',
  mixins: [baseLayoutMixin, themeMixin]
}
</script>
