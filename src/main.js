import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'


import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.prototype.$moment = moment;//赋值使用
Vue.use(ElementUI);


new Vue({
 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
