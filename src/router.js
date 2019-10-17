import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Search from './components/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
