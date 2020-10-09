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
  </div>
</template>

<script>
import attrBar from '@/baseComponents/attrBar.vue'
export default {
  name: 'leftAttrBox',
  data () {
    return {
      attrBarList: [
        {
          attrName: '血量',
          colorType: 'reds',
          total: 20,
          residue: 20
        },
        {
          attrName: '法量',
          colorType: 'blues',
          total: 20,
          residue: 20
        },
        {
          attrName: '能量',
          colorType: 'yellows',
          total: 20,
          residue: 20
        }
      ],
      attrNumList: [
        {
          attrName: '防御',
          num: 0
        },
        {
          attrName: '反伤',
          num: 0
        },
        {
          attrName: '治疗',
          num: 0
        },
        {
          attrName: '吸血',
          num: 0
        },
        {
          attrName: '暴击',
          num: 0
        },
        {
          attrName: '弱化',
          num: 0
        }
      ]
    }
  },
  components: { attrBar },
  computed: {},
  methods: {},
  created () {},
  mounted () {}
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
