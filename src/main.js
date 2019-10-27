import Vue from 'vue'
import './style/style.scss'
import './plugins/buefy'
// import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=fc64f795&page=1&r=json'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
