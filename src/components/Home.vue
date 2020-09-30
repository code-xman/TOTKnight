<template>
  <div class="home" flex="dir:top">
    <Top flex-box="0" />
    <router-view flex-box="1" />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
export default {
  data () {
    return {}
  },
  components: { Top },
  methods: {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
