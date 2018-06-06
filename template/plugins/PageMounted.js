import Vue from 'vue'

Vue.mixin({
  mounted () {
    if (this.$vnode && this.$vnode.data && this.$vnode.data.nuxtChild) {
      this.$nextTick(() => window.$nuxt.$emit('pageMounted'))
    }
  }
})
