<template>
  <div class="cardGroup">
    <card
      v-for="(item, index) in cardGroup"
      :key="index"
      :cardData="item"
    ></card>
  </div>
</template>

<script>
import card from '@/baseComponents/card.vue'

export default {
  name: 'cardGroup',
  components: { card },
  props: {
    cardGroup: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped>
.cardGroup {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 450px;
  padding: 10px;
}
</style>
