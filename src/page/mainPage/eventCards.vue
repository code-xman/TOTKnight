<template>
  <div class="eventCards">
    <template v-for="(item, index) in eCardList">
      <eCard :key="index" :content="item.content" />
    </template>
  </div>
</template>

<script>
import eCard from '@/baseComponents/eCard.vue'
export default {
  name: 'eventCards',
  components: { eCard },
  data () {
    return {
      eCardList: [
        { content: '遇见怪物' },
        { content: '获得奇物' },
        { content: '赶路中...' }
      ]
    }
  }
}
</script>

<style scoped></style>
