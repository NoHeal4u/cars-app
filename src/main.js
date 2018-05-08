import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppCars from './components/AppCars'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component : AppCars, name : 'cars' },

 
 
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
