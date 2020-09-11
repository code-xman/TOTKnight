<template>
  <div class="test" flex="main:justify">
    <leftAttrBox></leftAttrBox>
    <rightCards></rightCards>
  </div>
</template>

<script>
import leftAttrBox from '@/components/leftAttrBox.vue'
import rightCards from '@/components/rightCards.vue'
export default {
  name: 'test',
  data () {
    return {}
  },
  components: { leftAttrBox, rightCards },
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped>
.test{
  color: #fff;
}
</style>
