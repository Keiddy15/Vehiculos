import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "@/views/Inicio";
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/Inicio'
  },
  {
    path: '/',
    redirect: '/Inicio'
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    components: {main: Inicio}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
