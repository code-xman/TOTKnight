<template>
  <div class="eventCards">
    <template v-for="(item, index) in eCardList">
      <eCard :key="index" :eCardData="item" />
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
        { content: '遇见怪物', type: 'monster' },
        { content: '获得奇物', type: 'getThing' },
        { content: '赶路中...', type: 'running' }
      ]
    }
  }
}
</script>

<style scoped></style>
