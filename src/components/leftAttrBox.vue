<template>
  <div class="leftAttrBox">
    <attrBar
      v-for="(item, index) in attrBarList"
      :key="index"
      :attrObj="item"
    ></attrBar>
    <div class="attrNumBox">
      <span class="attrNum" v-for="(item, index) in attrNumList" :key="index">
        {{ item.attrName }}:{{ item.num }}
      </span>
    </div>
    <el-button class="btn" @click="reduceBlood">测试扣血</el-button>
    <el-button class="btn" @click="changeDefense">测试防御</el-button>
    <div flex>
      <el-button class="btn extractBtn" @click="extractFn">
        抽取事件
      </el-button>
      <div class="nowThing">当前事件: {{ thingName }}</div>
    </div>
  </div>
</template>

<script>
import attrBar from '@/baseComponents/attrBar.vue'
export default {
  name: 'leftAttrBox',
  props: {
    thingName: {
      type: String,
      default: '暂无'
    }
  },
  data () {
    return {
      attrBarList: this.getAttrBarList(),
      attrNumList: this.getAttrNumList()
    }
  },
  components: { attrBar },
  computed: {
    attrsBarObj () {
      return this.$store.state.attrsBarObj
    },
    attrsNumObj () {
      return this.$store.state.attrsNumObj
    }
  },
  methods: {
    getAttrBarList () {
      return [
        {
          attrName: '血量',
          name: 'blood',
          colorType: 'reds',
          total: this.$store.state.attrsBarObj.bloodAll,
          residue: this.$store.state.attrsBarObj.blood
        },
        {
          attrName: '法量',
          name: 'mana',
          colorType: 'blues',
          total: this.$store.state.attrsBarObj.manaAll,
          residue: this.$store.state.attrsBarObj.mana
        },
        {
          attrName: '能量',
          name: 'energy',
          colorType: 'yellows',
          total: this.$store.state.attrsBarObj.energyAll,
          residue: this.$store.state.attrsBarObj.energy
        }
      ]
    },
    getAttrNumList () {
      return [
        {
          attrName: '防御',
          name: 'defense',
          num: this.$store.state.attrsNumObj.defense
        },
        {
          attrName: '反伤',
          name: 'backInjury',
          num: this.$store.state.attrsNumObj.backInjury
        },
        {
          attrName: '治疗',
          name: 'treatment',
          num: this.$store.state.attrsNumObj.treatment
        },
        {
          attrName: '吸血',
          name: 'suckBlood',
          num: this.$store.state.attrsNumObj.suckBlood
        },
        {
          attrName: '暴击',
          name: 'criticalStrike',
          num: this.$store.state.attrsNumObj.criticalStrike
        },
        {
          attrName: '弱化',
          name: 'weaken',
          num: this.$store.state.attrsNumObj.weaken
        }
      ]
    },
    // 测试扣血
    reduceBlood () {
      this.$store.commit('changeAttrsBarObj', {
        name: 'blood',
        type: 'reduce',
        num: 1.3
      })
    },
    // 测试防御
    changeDefense () {
      this.$store.commit('changeAttrsNumObj', {
        name: 'defense',
        type: 'add',
        num: 1.3
      })
    },
    // 抽取事件
    extractFn () {
      this.$emit('extractFn')
    }
  },
  watch: {
    attrsBarObj: {
      handler () {
        this.attrBarList = this.getAttrBarList()
      },
      deep: true
    },
    attrsNumObj: {
      handler () {
        this.attrNumList = this.getAttrNumList()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 5px 10px;
}
.leftAttrBox {
  height: auto;
  width: 300px;
  background: #031628;
  color: #fff;
}
.attrNumBox {
  margin: 0 20px;
}
.attrNum {
  display: inline-block;
  width: 50%;
  padding: 5px 0;
}
.nowThing {
  line-height: 42px;
}
</style>
