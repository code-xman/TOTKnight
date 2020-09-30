<template>
  <div class="Top">
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      flex="main:center"
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, index) in menuList"
        :name="item.name"
        :key="index"
        :index="index.toString()"
      >
        {{ item.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      // activeIndex: '0',
      menuList: this.$store.state.baseData.MENU_LIST
    }
  },
  methods: {
    handleSelect (key) {
      const data = this.menuList[key]
      if (this.$route.name === data.name) {
        this.$utils.tipsWarning('已是所选页面')
        return
      }
      this.$router.push(data.name)
    }
  },
  mounted () {},
  computed: {
    activeIndex () {
      return this.menuList
        .findIndex(item => item.name === this.$route.name)
        .toString()
    }
  }
}
</script>

<style scoped></style>
