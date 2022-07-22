<template>
  <div
      id="app"
      class="w-full h-full"
  >
    <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div class="flex-none flex justify-end" style="width: 108rem;">
        <picture>
          <!--          <source srcset="/light-shadow.png" type="image/png">-->
          <img src="/dark-shadow.png" alt=""
               class="w-[71.75rem] flex-none max-w-none dark:hidden"></picture>
        <picture>
          <!--          <source srcset="/dark-shadow.png" type="image/png">-->
          <img src="/light-shadow.png" alt=""
               class="w-[90rem] flex-none max-w-none hidden dark:block"></picture>
      </div>
    </div>
    <layout-header/>
    <div class="container">
      <div class="flex h-full">
        <Sidebar class="flex-none"/>
        <div class="flex-1 overflow-y-auto" id="page-container" :style="{paddingLeft: `${sidebarWidth}px`}">
          <div class="mx-auto pl-sm p-md">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/Sidebar'
import LayoutHeader from '~/components/Header'

export default {
  name: 'defaultLayout',
  components: {Sidebar, LayoutHeader},
  computed: {
    sidebarWidth() {
      return this.$store.getters['theme/sidebarWidth']
    }
  }
}
</script>
