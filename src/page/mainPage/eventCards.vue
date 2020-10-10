<template>
  <div class="eventCards">
    <template v-for="(item, index) in eCardList">
      <eCard
        :key="index"
        :eCardData="item"
        :active="active"
        :hasThing="hasThing"
        @eCardClick="eCardClick"
      />
    </template>
  </div>
</template>

<script>
import eCard from '@/baseComponents/eCard.vue'
export default {
  name: 'eventCards',
  components: { eCard },
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      hasThing: false,
      eCardList: [
        { content: '遇见怪物', type: 'monster' },
        { content: '获得奇物', type: 'getThing' },
        { content: '赶路中...', type: 'running' }
      ]
    }
  },
  methods: {
    // 事件卡片点击事件
    eCardClick (data) {
      this.hasThing = true
      this.$emit('clickFn', data)
    },
    // 随机卡片
    randomCard () {
      const typeNum = Math.random() * 3
      if (typeNum < 1) {
        return { content: '遇见怪物', type: 'monster' }
      } else if (typeNum < 2) {
        return { content: '获得奇物', type: 'getThing' }
      } else {
        return { content: '赶路中...', type: 'running' }
      }
    },
    // 重随事件卡片
    restEventCards () {
      const arr = []
      const num = Math.floor(Math.random() * 3) + 2
      for (let i = 0; i < num; i++) {
        arr.push(this.randomCard())
      }
      // console.log('arr :>> ', arr)
      this.eCardList = []
      this.eCardList = arr
    }
  },
  watch: {
    active: {
      handler () {
        this.hasThing = false
        this.restEventCards()
      },
      immediate: true
    }
  }
}
</script>

<style scoped></style>
