import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gallerry from './views/Gallerry.vue'
import GallerryDetail from './views/GallerryDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallerry',
      name: 'gallerry-main',
      component: Gallerry,
      children: [
        {
          path: ':id',
          name: 'gallerry-detail',
          props: true,
          component: GallerryDetail
        }
      ]
    },
    {
      path: '/about/:id',
      name: 'about',
      props: true,
      component: () => import('./views/About.vue')
    },
    { path: '*', redirect: { name: 'home' } }
  ]
})
