<template>
  <div
    class="card"
    :class="{ active: index === activeIndex }"
    :style="{ background: cardData.color }"
    @click="clickFn()"
  >
    <div class="consumeBlue">{{ cardData.consumeBlue }}</div>
    <div class="consumeYellow">{{ cardData.consumeYellow }}</div>
    <div class="name">{{ cardData.name }}</div>
    <div class="content">{{ cardData.content }}</div>
    <div class="points">{{ cardData.points }}</div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    cardData: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: -1
    },
    activeIndex: {
      type: Number,
      default: -2
    }
  },
  data () {
    return {}
  },
  methods: {
    clickFn () {
      this.$emit('cardClick', this.cardData, this.index)
    }
  },
  mounted () {},
  computed: {}
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: inline-block;
  border: 3px solid #031628;
  margin-bottom: 10px;
  width: 30%;
  height: 180px;
  color: #fff;
  font-size: 24px;
  transition: all 0.3s;
  cursor: pointer;
  overflow: hidden;
}
.card:before {
  content: ' ';
  position: absolute;
  background: #fff;
  width: 25px;
  height: 100%;
  top: 0;
  left: -67px;
  opacity: 0.3;
  transition: all 0.6s ease-out;
  transform: skewX(-25deg);
}
.card:hover:before {
  width: 45px;
  left: 205px;
}
.card.active {
  border: 3px solid #fff;
}
.consumeBlue {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #1e90ff;
}
.consumeYellow {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #e8c711;
}
.name {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 78px;
}
.content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 12px;
}
.points {
  position: absolute;
  bottom: 4px;
  right: 10px;
}
</style>
