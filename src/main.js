import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// flex布局简化库
import 'flex.css'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// utils
import './utils'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
