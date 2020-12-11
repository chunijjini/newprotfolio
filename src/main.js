import Vue from 'vue'
import vuescroll from 'vue-scroll'
import App from './App.vue'
import router from './router'  

Vue.config.productionTip = false

Vue.use( vuescroll )



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
