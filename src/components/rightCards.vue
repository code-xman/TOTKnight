<template>
  <div class="rightCards" flex="dir:top">
    <div flex-box="1" class="myCards">
      <card
        v-for="(item, index) in myCards"
        :key="index"
        :index="index"
        :activeIndex="selectCardIndex"
        :cardData="item"
        @cardClick="cardClick"
      ></card>
    </div>
    <div flex="main:justify" flex-box="0">
      <div class="btn drawCard" @click="drawCard">抽卡</div>
      <div class="btn useCard" @click="useCard">使用</div>
      <div class="btn discard" @click="discard">弃置</div>
    </div>
  </div>
</template>

<script>
import card from '@/baseComponents/card.vue'
export default {
  name: 'rightCards',
  components: { card },
  data () {
    return {
      drawType: this.$store.state.baseData.TYPE,
      // 当前卡片
      nowCards: [],
      // 起始卡片
      startCards: [
        {
          type: 'attack',
          color: '#d62626',
          borderCss: '',
          name: 'A',
          points: 1,
          consumeBlue: 0,
          consumeYellow: 0,
          content: '攻击点数'
        },
        {
          type: 'defense',
          color: '#4169E1',
          borderCss: '',
          name: 'D',
          points: 1,
          consumeBlue: 0,
          consumeYellow: 0,
          content: '防御加成'
        }
      ],
      // 抽取卡牌类型index
      typeIndex: 0,
      // points系数
      coefficient: 0,
      // 抽取卡牌对象
      drawCardObj: {},
      // 选中卡片index
      selectCardIndex: -1,
      // 选中的卡片数据
      selectCardData: {}
    }
  },
  methods: {
    // 抽取
    drawCard () {
      if (this.nowCards.length >= 9) {
        this.$utils.tipsWarning('所持卡数量达到上线')
        return
      }
      const typeNum = Math.floor(Math.random() * 10)
      if (typeNum < 6) {
        // A
        this.typeIndex = 0
        this.coefficient = Math.random() * 6 > 5 ? 5 : 9
      } else if (typeNum < 9) {
        // D
        this.typeIndex = 1
        this.coefficient = Math.random() * 5 > 3 ? 3 : 5
      } else {
        // O
        this.typeIndex = 2
      }
      // 复制卡牌基本属性
      this.drawCardObj = this.$utils.copy(
        this.$store.state.baseData.CARD_TYPE[this.typeIndex]
      )
      if (this.drawCardObj.type !== 'others') {
        // 非O卡计算points
        const pointsNum = Math.floor(Math.random() * this.coefficient)
        this.drawCardObj.points = pointsNum
      }
      console.log(this.drawCardObj)
      this.nowCards.push(this.drawCardObj)
    },
    // 使用
    useCard () {},
    // 丢弃
    discard () {
      if (this.selectCardIndex < 0) {
        this.$utils.tipsWarning('未选择卡片')
        return
      }
      this.nowCards.splice(this.selectCardIndex, 1)
      this.selectCardIndex = -1
    },
    // 卡片点击事件
    cardClick (cardData, index) {
      console.log('cardData :>> ', cardData)
      console.log('index :>> ', index)
      this.selectCardData = cardData
      this.selectCardIndex = index
    }
  },
  mounted () {
    this.nowCards = this.$utils.copy(this.startCards)
  },
  computed: {
    myCards () {
      return this.nowCards
    }
  }
}
</script>

<style lang="scss" scoped>
.rightCards {
  height: auto;
  width: 450px;
  padding: 20px 10px;
  background: #031628;
  color: #fff;
}
.myCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  overflow: auto;
  &:after {
    // 处理末行左对其
    content: '';
    width: 30%;
    height: 0;
  }
}
// 按钮
.btn {
  width: 30%;
  height: 40px;
  line-height: 40px;
  border: 1px solid;
  text-align: center;
  font-size: 24px;
  border-radius: 20px;
  cursor: pointer;
}
// 定义颜色
$btnBule: #51b5d4;
$btnPurple: #cf4cda;
$btnGreen: #a0d24b;
.drawCard {
  color: $btnBule;
}

.useCard {
  color: $btnPurple;
}

.discard {
  color: $btnGreen;
}
.btn:hover {
  color: white;
  border: 0;
}
.drawCard:hover {
  background-color: $btnBule;
  -webkit-box-shadow: 10px 10px 99px 6px $btnBule;
  -moz-box-shadow: 10px 10px 99px 6px $btnBule;
  box-shadow: 10px 10px 99px 6px $btnBule;
}

.useCard:hover {
  background-color: $btnPurple;
  -webkit-box-shadow: 10px 10px 99px 6px $btnPurple;
  -moz-box-shadow: 10px 10px 99px 6px $btnPurple;
  box-shadow: 10px 10px 99px 6px $btnPurple;
}

.discard:hover {
  background-color: $btnGreen;
  -webkit-box-shadow: 10px 10px 99px 6px $btnGreen;
  -moz-box-shadow: 10px 10px 99px 6px $btnGreen;
  box-shadow: 10px 10px 99px 6px $btnGreen;
}
</style>
