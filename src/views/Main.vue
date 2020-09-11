<template>
  <div class="Main" flex="dir:top">
    <Top flex-box="0" @changePage="changePage" />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
export default {
  name: 'Main',
  data () {
    return {}
  },
  components: { Top },
  methods: {
    changePage (data) {
      console.log(data)
    }
  },
  mounted () {}
}
</script>

<style scoped></style>
