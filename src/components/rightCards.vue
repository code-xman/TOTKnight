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
      <div class="btn overRound" @click="overRound">结束回合</div>
    </div>
  </div>
</template>

<script>
import card from '@/baseComponents/card.vue'
export default {
  name: 'rightCards',
  components: { card },
  props: {
    bossName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      drawType: this.$store.state.baseData.TYPE,
      // 当前卡片
      nowCards: [],
      // 当前回合角色
      nowRoundRole: 'knight',
      // 当前回合抽卡次数
      nowRoundDrawTimes: 0,
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
    // 当前回合角色判断
    isBossRound () {
      if (this.nowRoundRole !== 'knight') {
        return true
      } else {
        return false
      }
    },
    // 抽取
    drawCard () {
      if (this.isBossRound()) {
        this.$utils.tipsWarning('非自己回合阶段')
        return
      }
      if (this.nowCards.length >= 9) {
        this.$utils.tipsWarning('所持卡数量达到上线')
        return
      }
      if (this.nowRoundDrawTimes >= 2) {
        this.$utils.tipsWarning('回合抽卡已达上线')
        return
      } else {
        this.nowRoundDrawTimes++
      }
      // typeNum 随机类型 0-6为A；6-9为D；9-10为O
      const typeNum = Math.floor(Math.random() * 10)
      if (typeNum < 6) {
        // A
        this.typeIndex = 0
        this.coefficient = Math.random() * 6 < 5 ? 5 : 9
      } else if (typeNum < 9) {
        // D
        this.typeIndex = 1
        this.coefficient = Math.random() * 5 < 3 ? 3 : 5
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
        const pointsNum = Math.ceil(Math.random() * this.coefficient)
        this.drawCardObj.points = pointsNum
      }
      // console.log('抽取卡牌属性', this.drawCardObj)
      this.nowCards.push(this.drawCardObj)
    },
    // 使用
    useCard () {
      if (this.isBossRound()) {
        this.$utils.tipsWarning('非自己回合阶段')
        return
      }
      console.log('selectCardData :>> ', this.selectCardData)
      // 判断
      if (
        this.$store.state.attrsBarObj.mana < this.selectCardData.consumeBlue
      ) {
        this.$utils.tipsWarning('法量不足，无法使用')
        return
      }
      if (
        this.$store.state.attrsBarObj.energy < this.selectCardData.consumeYellow
      ) {
        this.$utils.tipsWarning('能量不足，无法使用')
        return
      }
      // 消耗蓝
      this.$store.commit('changeAttrsBarObj', {
        name: 'mana',
        type: 'reduce',
        num: this.selectCardData.consumeBlue
      })
      // 消耗黄
      this.$store.commit('changeAttrsBarObj', {
        name: 'energy',
        type: 'reduce',
        num: this.selectCardData.consumeYellow
      })
      // 触发效果
      this.cardEffect()
      // 使用后弃置
      this.discard()
    },
    // 丢弃
    discard () {
      if (this.isBossRound()) {
        this.$utils.tipsWarning('非自己回合阶段')
        return
      }
      if (this.selectCardIndex < 0) {
        this.$utils.tipsWarning('未选择卡片')
        return
      }
      this.nowCards.splice(this.selectCardIndex, 1)
      this.selectCardIndex = -1
    },
    // 结束回合
    overRound () {
      if (this.isBossRound()) {
        this.$utils.tipsWarning('非自己回合阶段')
        return
      }
      this.nowRoundRole = 'boss'
    },
    // 手卡效果
    cardEffect () {
      switch (this.selectCardData.type) {
        // 防
        case 'defense':
          this.$store.commit('changeAttrsNumObj', {
            name: 'defense',
            type: 'add',
            num: this.selectCardData.points
          })
          break
        // 攻
        case 'attack':
          this.$store.commit('changeBossAttrObj', {
            name: 'blood',
            type: 'reduce',
            num: this.selectCardData.points
          })
          break

        default:
          break
      }
    },
    // 卡片点击事件
    cardClick (cardData, index) {
      // console.log('选择卡牌属性 :>> ', cardData)
      // console.log('选择卡牌索引 :>> ', index)
      this.selectCardData = cardData
      this.selectCardIndex = index
    },
    // 减少血量
    reduceBlood (points) {
      this.$store.commit('changeAttrsBarObj', {
        name: 'blood',
        type: 'reduce',
        num: points
      })
    },
    // boss行动回合
    bossActiveFn () {
      switch (this.bossName) {
        case 'scarecrow':
          this.reduceBlood(1)
          break

        default:
          break
      }
    },
    // 结束判断
    isOver () {
      if (this.$store.state.attrsBarObj.blood <= 0) {
        this.$utils.tipsErr('失败')
      } else if (this.$store.state.bossAttrObj.blood <= 0) {
        this.$utils.tipsErr('挑战成功')
      } else {
        return false
      }
      return true
    }
  },
  mounted () {
    this.nowCards = this.$utils.copy(this.startCards)
  },
  computed: {
    myCards () {
      return this.nowCards
    }
  },
  watch: {
    nowRoundRole: {
      async handler (val) {
        if (val === 'boss') {
          await this.bossActiveFn()
          this.$utils.tipsWarning('到你的回合')
          const res = await this.isOver()
          if (!res) {
            this.nowRoundRole = 'knight'
            this.nowRoundDrawTimes = 0
          }
        }
      }
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
  margin: 0 10px;
  width: 25%;
  height: 40px;
  line-height: 40px;
  border: 1px solid;
  text-align: center;
  font-size: 22px;
  border-radius: 20px;
  cursor: pointer;
}
// 定义颜色
$btnBule: #51b5d4;
$btnPurple: #cf4cda;
$btnGreen: #a0d24b;
$btnYellow: #d2d04b;
.drawCard {
  color: $btnBule;
}

.useCard {
  color: $btnPurple;
}

.discard {
  color: $btnGreen;
}
.overRound {
  color: $btnYellow;
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

.overRound:hover {
  background-color: $btnYellow;
  -webkit-box-shadow: 10px 10px 99px 6px $btnYellow;
  -moz-box-shadow: 10px 10px 99px 6px $btnYellow;
  box-shadow: 10px 10px 99px 6px $btnYellow;
}
</style>
