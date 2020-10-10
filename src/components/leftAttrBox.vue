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
    <el-button @click="reduceBlood">测试扣血</el-button>
    <el-button @click="changeDefense">测试防御</el-button>
  </div>
</template>

<script>
import attrBar from '@/baseComponents/attrBar.vue'
export default {
  name: 'leftAttrBox',
  data () {
    return {
      attrBarList: this.getAttrBarList(),
      attrNumList: this.getAttrNumList()
    }
  },
  components: { attrBar },
  computed: {
    attrsBarObj () {
      return {
        bloodAll: this.$store.state.bloodAll,
        blood: this.$store.state.blood,
        manaAll: this.$store.state.manaAll,
        mana: this.$store.state.mana,
        energyAll: this.$store.state.energyAll,
        energy: this.$store.state.energy
      }
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
          total: this.$store.state.bloodAll,
          residue: this.$store.state.blood
        },
        {
          attrName: '法量',
          name: 'mana',
          colorType: 'blues',
          total: this.$store.state.manaAll,
          residue: this.$store.state.mana
        },
        {
          attrName: '能量',
          name: 'energy',
          colorType: 'yellows',
          total: this.$store.state.energyAll,
          residue: this.$store.state.energy
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
    reduceBlood () {
      this.$store.commit('reduceAttrs', {
        name: 'blood',
        num: 1.3
      })
    },
    changeDefense () {
      this.$store.commit('changeAttrsNumObj', {
        name: 'defense',
        type: 'add',
        num: 1.3
      })
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
</style>
