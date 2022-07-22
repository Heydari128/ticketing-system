export default {
  computed: {
    dark: {
      get() {
        return this.$store.getters['theme/dark']
      },
      set(value) {
        this.$store.dispatch('theme/SET_DARK', !!value)
      }
    }
  },
  methods: {
    setDarkMode(value) {
      this.$store.dispatch('theme/SET_DARK', !!value)
    }
  },
  beforeMount() {
    this.setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
}
