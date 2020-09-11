<template>
  <div id="app" flex="dir:top">
    <Top flex-box="0" @changePage="changePage" />
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
  methods: {
    changePage (data) {
      if (this.$route.name === data.name) {
        this.$utils.tipsWarning('已是所选页面')
        // this.$message({
        //   message: '已是所选页面',
        //   type: 'warning'
        // })
        return
      }
      this.$router.push(data.name)
    }
  },
  mounted () {}
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: #f3f6ff;
  min-height: 600px;
  min-width: 1280px;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
