<template>
  <div class="cards" flex="main:center">
    <cardGroup class="cardGrooup" :cardGroup="attacks"></cardGroup>
    <cardGroup class="cardGrooup" :cardGroup="defenses"></cardGroup>
    <cardGroup class="cardGrooup" :cardGroup="others"></cardGroup>
  </div>
</template>

<script>
import cardGroups from '@/assetsData/cardGroup.js'
import cardGroup from '@/baseComponents/cardGroup.vue'
export default {
  name: 'cards',
  data () {
    return {
      attacks: cardGroups.attacks,
      defenses: cardGroups.defenses,
      others: cardGroups.others
    }
  },
  components: { cardGroup },
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped></style>
