<template>
  <div class="test" flex>
    <leftAttrBox flex-box="0"></leftAttrBox>
    <div class="mid-content" flex-box="1">
      <div flex>
        <el-steps simple :active="active" finish-status="success" flex-box="1">
          <el-step
            v-for="(step, index) in stepList"
            :key="index"
            :title="step.name"
          ></el-step>
        </el-steps>
        <div flex="cross:center" flex-box="0">
          <el-button class="extractBtn" @click="extractFn">
            {{ btnName }}
          </el-button>
        </div>
      </div>
      <attrBar :attrObj="bossAttrObj"></attrBar>
      <div>当前事件: {{ thingName }}</div>
    </div>
    <rightCards flex-box="0"></rightCards>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="70%">
      <component
        :is="componentName"
        :active="active"
        @clickFn="clickFn"
      ></component>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import leftAttrBox from '@/components/leftAttrBox.vue'
import rightCards from '@/components/rightCards.vue'
import eventCards from './eventCards.vue'
import attrBar from '@/baseComponents/attrBar.vue'
export default {
  name: 'test',
  data () {
    return {
      stepList: this.$store.state.baseData.STEP_LIST_1,
      active: 0,
      btnName: '抽取事件',
      thingName: '暂无',
      bossAttrObj: this.getBossAttrObj(),
      // 弹框
      dialogTitle: '',
      dialogVisible: false,
      componentName: ''
    }
  },
  components: { leftAttrBox, rightCards, eventCards, attrBar },
  computed: {
    bossAttrs () {
      return this.$store.state.bossAttrObj
    }
  },
  methods: {
    getBossAttrObj () {
      return {
        attrName: '稻草人血量',
        colorType: 'scarecrow',
        total: this.$store.state.bossAttrObj.bloodAll,
        residue: this.$store.state.bossAttrObj.blood
      }
    },
    // 下一步按钮事件
    extractFn () {
      if (this.active >= this.stepList.length) {
        this.$utils.tipsWarning('已到达最终地点')
        return
      }
      // this.active++
      this.dialogTitle = '请抽取发生的事件'
      this.componentName = 'eventCards'
      this.dialogVisible = true
    },
    // 弹框点击事件
    clickFn (data) {
      // console.log('data :>> ', data)
      this.thingName = data.content
    }
  },
  watch: {
    bossAttrs: {
      handler () {
        this.bossAttrObj = this.getBossAttrObj()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.extractBtn {
  margin: 0 5px;
}
</style>
