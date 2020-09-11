import Vue from 'vue'
import { Message } from 'element-ui'

/*
 * https://xuliangzhan_admin.gitee.io/xe-utils/#/
 *
 */
import { clone } from 'xe-utils'

// 警告提示
const tipsWarning = msg => {
  Message({
    showClose: true,
    type: 'warning',
    message: msg
  })
}
// 错误提示
const tipsErr = msg => {
  Message({
    showClose: true,
    type: 'error',
    message: msg
  })
}
// 成功提示
const tipsSuccess = msg => {
  Message({
    showClose: true,
    type: 'success',
    message: msg
  })
}

/**
 * 按值而非引用复制对象
 *
 * @param {*} data 传入的DATA
 * @returns 返回的对象
 */
const copy = data => {
  return clone(data, true)
}

const utils = {
  tipsWarning,
  tipsErr,
  tipsSuccess,
  copy,
  install (Vue) {
    Vue.prototype.$utils = utils
  }
}

Vue.use(utils)

export default utils
