<template>
  <div class="attrBar">
    <!-- type="dashboard" -->
    <el-progress
      :text-inside="true"
      :stroke-width="14"
      :color="colors"
      :percentage="percentage"
    ></el-progress>
    <div class="attrName">{{ attrObj.attrName }}:{{ attrObj.residue }}</div>
    <!-- 测试各段color -->
    <!-- <div>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-button-group>
    </div> -->
  </div>
</template>

<script>
import colors from '@/assetsData/attrBar.js'

export default {
  name: 'attrBar',
  props: {
    attrObj: {
      type: Object,
      default: () => {
        return {
          // 属性名字
          attrName: {
            type: String,
            default: '属性'
          },
          // 颜色类型
          colorType: {
            type: String,
            default: 'reds'
          },
          // 总数
          total: {
            type: Number,
            default: 1
          },
          // 剩余数量
          residue: {
            type: Number,
            default: 0
          }
        }
      }
    }
  },
  data () {
    return {
      // percentage: 100,
      colors: colors[this.attrObj.colorType]
    }
  },
  computed: {
    percentage () {
      return (this.attrObj.residue / this.attrObj.total).toFixed(4) * 100
    }
  },
  methods: {
    increase () {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease () {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    }
  },
  mounted () {}
}
</script>

<style scoped>
.attrBar {
  margin: 10px;
}
.attrName {
  padding: 5px 10px 0;
}
</style>
