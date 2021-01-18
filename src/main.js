import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
const echarts = require('echarts')
require("echarts/theme/macarons");
require("echarts/map/js/china");


console.log(echarts)
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')