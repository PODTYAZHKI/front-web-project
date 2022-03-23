import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)
>>>>>>> dd6869dca4db9bfefe366e3242bfef2c2b0e84ff
Vue.config.productionTip = false

new Vue({
  axios,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
