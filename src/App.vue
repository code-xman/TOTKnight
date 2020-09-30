<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
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
</style>
