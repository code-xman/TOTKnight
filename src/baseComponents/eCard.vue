<template>
  <div class="eCard" :class="todo ? 'flipped' : ''" @click="eCardClick">
    <div class="card front">发生事件</div>
    <div class="card back">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'eCard',
  props: {
    content: {
      type: String,
      default: '赶路中...'
    }
  },
  data () {
    return {
      todo: false
    }
  },
  methods: {
    eCardClick () {
      this.todo = !this.todo
    }
  }
}
</script>

<style scoped>
.eCard {
  display: inline-block;
  margin: 10px;
  position: relative;
  width: 160px;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 1s;
}
.flipped {
  transform: rotateY(180deg);
}
.card {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 5px;
}
.front {
  z-index: 2;
  background: #00bcd4;
  writing-mode: vertical-lr;
  text-align: center;
  line-height: 150px;
  font-size: 36px;
  color: #fff;
}
.back {
  z-index: 1;
  background: #a6d470;
  transform: rotateY(180deg);
}
</style>
