// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Error404 from './views/Error404.vue'

const routes = [
  { path: '/', name: 'HomePage', component: Home },
  { path: '/country/:code', component: Detail },
  { path: '/:patchMatch(.*)*', component: Error404}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
