// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入babel-polyfill解决为Babel 默认只转换新的 JavaScript 语法，而不转换新的 API的问题,不需要引入babel-runtime
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
// 引入fastclick-》解决300ms延迟的问题
import fastclick from 'fastclick'

// rem初始化
import './common/reset'

// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios

// 导入store
import store from '../store'

import 'common/style/index.css'

// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
