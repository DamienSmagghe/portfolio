import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transitionName: 'slide-right' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { transitionName: 'slide-left' }
    }
  ]
})
