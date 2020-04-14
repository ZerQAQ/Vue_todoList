import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VueRoutor from 'vue-router'
Vue.use(VueRoutor)

import Home from './components/home.vue'
import News from './components/news.vue'
import Content from './components/content.vue'

const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News},
  {path: '/content', component: Content},
  {path: '*', redirect: '/home'}
]

const router = new VueRoutor({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

