import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import axios from 'axios'

// 重置样式
import './assets/style/common.css'
//设置请求跟路径
axios.defaults.baseURL = "http://127.0.0.1:3001"
//将axios挂在到vue原型中
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
