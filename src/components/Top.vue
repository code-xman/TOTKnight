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
        v-for="(item, index) in menuListL"
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
      menuListL: [
        {
          name: 'setout',
          title: '准备'
        },
        {
          name: 'start',
          title: '开始'
        },
        {
          name: 'center',
          title: '个人中心'
        },
        {
          name: 'about',
          title: '关于'
        },
        {
          name: 'test',
          title: 'test'
        },
        {
          name: 'cards',
          title: 'cards'
        },
        {
          name: 'sponsorship',
          title: '赞助'
        }
      ]
    }
  },
  methods: {
    handleSelect (key) {
      this.$emit('changePage', this.menuListL[key])
    }
  },
  mounted () {},
  computed: {
    activeIndex () {
      return this.menuListL
        .findIndex(item => item.name === this.$route.name)
        .toString()
    }
  }
}
</script>

<style scoped></style>
