import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import SobreNosotros from '@/components/SobreNosotros';
import AgregarAplicacion from '@/components/AgregarAplicacion';
import Aplicacion from '@/components/Aplicacion';
import Registro from '@/components/Registro';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/sobre-nostros',
      name: 'SobreNosotros',
      component: SobreNosotros,
    },
    {
      path: '/aplicaciones/agregar',
      name: 'AgregarAplicacion',
      component: AgregarAplicacion,
    },
    {
      path: '/aplicaciones/:id',
      name: 'Aplicacion',
      component: Aplicacion,
    },
    {
      path: '/usuarios/registro',
      name: 'Registro',
      component: Registro,
    },
    {
      path: '/usuarios/login',
      name: 'Login',
      component: Login,
    },
  ],
});
