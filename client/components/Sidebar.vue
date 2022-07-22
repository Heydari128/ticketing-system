<template>
  <div id="sidebar" ref="sidebarEl" class="h-full overflow-y-auto scroll-smooth fixed pr-sm -ml-md"
       :style="{width: sidebarWidth+'px', height: `calc(100vh - 50px)`}">
    <nav class="pt-sm pl-xs pr-lg pb-lg px-3 h-full pb-20 text-slate-600 dark:text-slate-500">
      <router-link
          v-for="(item, i) in links" :key="i"
          exact
          :class="'group block my-sm font-normal'"
          :activeClass="'text-black dark:text-white !font-bold'"
          :to="item.linkUrl">
        <span v-bind="linkAttrs">
          <font-icon class="mr-2" size="text-4xl" :name="item.icon"/>
        {{ item.title }}
        </span>
      </router-link>
      <div class="text-xs bottom-0 left-0 right-0 absolute pl-4 pr-14 py-4">
        <!--        <div class="my-4 pt-px dark:bg-slate-800 bg-slate-200"></div>-->
        © {{ new Date().getFullYear() }}&nbsp;Ticketing System
      </div>
    </nav>
    <div ref="resizer" class="resizer-x" @mousedown.prevent="onInitResize">
      <div class="h-full pr-2 flex">
        <div class="h-full border-l absolute z-0 border-slate-200 dark:border-slate-800"></div>
        <div class="flex items-center pl-1 h-full z-10">
          <span class="w-1.5 h-8 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import themeMixin from '~/mixins/themeMixin'
import {computed, reactive, ref, onBeforeUnmount} from 'vue'
import getStore from '~/store'

const sidebarEl = ref(null)
const store = reactive(getStore())
const links = reactive([
  {
    title: 'Create User',
    linkUrl: '/manage/create-user',
    icon: 'person_add'
  },
  {
    title: 'Tickets',
    linkUrl: '/tickets',
    icon: 'inbox'
  },
  {
    title: 'Tickets',
    linkUrl: '/tickets2',
    icon: 'inbox'
  },
  {
    title: 'Tickets',
    linkUrl: '/tickets2',
    icon: 'inbox'
  },
  {
    title: 'Tickets',
    linkUrl: '/tickets2',
    icon: 'inbox'
  }
])

const linkAttrs = reactive({
  class: `relative inline-flex items-center group-hover:bg-slate-100 dark:group-hover:bg-slate-800 px-md py-sm text-md rounded-full transition ease-in-out hover:text-black dark:group-hover:text-slate-50`
})

const sidebarWidth = computed(() => store.getters['theme/sidebarWidth'])

const onResize = (e) => {
  if (!sidebarEl) return
  const value = e.pageX - sidebarEl.value?.getBoundingClientRect().left
  store.dispatch('theme/SET_SIDEBAR_WIDTH', Math.min(Math.max(value, 220), 400))
}

// mixin(themeMixin)

const onStopResize = () => {
  window.removeEventListener('mousemove', onResize, false)
  window.removeEventListener('mouseup', onStopResize, false)
}

const onInitResize = () => {
  window.addEventListener('mousemove', onResize, false)
  window.addEventListener('mouseup', onStopResize, false)
}

onBeforeUnmount(() => {
  onStopResize()
})

</script>
<style lang="scss">
.resizer-x {
  min-width: 4px;
  height: 100%;
  right: 0;
  bottom: 0;
  top: 0;
  position: absolute;
  cursor: w-resize;
}
</style>
