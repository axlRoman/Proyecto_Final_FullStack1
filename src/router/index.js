import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import SobreNosotros from '@/components/SobreNosotros';
import AgregarPelicula from '@/components/AgregarPelicula';
import Pelicula from '@/components/Pelicula';
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
      path: '/peliculas/agregar',
      name: 'AgregarPelicula',
      component: AgregarPelicula,
    },
    {
      path: '/peliculas/:id',
      name: 'Pelicula',
      component: Pelicula,
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
