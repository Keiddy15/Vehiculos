import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "@/views/Inicio";
import Comprar from "@/views/Comprar";
import TOYOTA_JF from "@/views/TOYOTA_JF";
import TOYOTA_prado from "@/views/TOYOTA_prado";
import CHEVR_spark from "@/views/CHEVR_spark";
import FOTON_fkr from "@/views/FOTON_fkr";
import HONDA_cb from "@/views/HONDA_cb";
import Formulario from "@/views/Formulario";
import Factura from "@/views/Factura";
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
  {
    path: '/Comprar',
    name: 'Comprar',
    components: {main: Comprar}
  },
  {
    path: '/TOYOTA_JF',
    name: 'TOYOTA_JF',
    components: {main: TOYOTA_JF}
  },
  {
    path: '/TOYOTA_prado',
    name: 'TOYOTA_prado',
    components: {main: TOYOTA_prado}
  },
  {
    path: '/CHEVR_spark',
    name: 'CHEVR_spark',
    components: {main: CHEVR_spark}
  },
  {
    path: '/FOTON_fkr',
    name: 'FOTON_fkr',
    components: {main: FOTON_fkr}
  },
  {
    path: '/HONDA_cb',
    name: 'HONDA_cb',
    components: {main: HONDA_cb}
  },
  {
    path: '/Formulario',
    name: 'Formulario',
    components: {main: Formulario}
  },
  {
    path: '/Factura',
    name: 'Factura',
    components: {main: Factura}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
