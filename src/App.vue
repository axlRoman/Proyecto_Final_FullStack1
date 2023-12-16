<template>
  <v-app id="inspire" >
    <v-navigation-drawer v-model="drawer" absolute bottom temporary app>
        <v-list dense>
        <router-link v-bind:to="{name: 'Inicio'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>Inicio</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Inicio'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-gamepad</v-icon>
            </v-list-item-action>
            <v-list-item-content>Apps</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'SobreNosotros'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>Sobre Nosotros</v-list-item-content>
          </v-list-item>
        </router-link>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar
      absolute
      color="#EFF6FF"
      dark
      shrink-on-scroll
      prominent
      src="https://2672686a4cf38e8c2458-2712e00ea34e3076747650c92426bbb5.ssl.cf1.rackcdn.com/2018-06-04-21-40-16.jpeg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0, 0, 0,.7), rgba(20,20,30,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-app-bar-title class="font-weight-bold titulo-primario">RANKAPPS</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn icon color="#FFFFFF" v-bind:to="{name: 'Login'}">
        <v-icon class="button-account">mdi-account</v-icon>
      </v-btn>

    </v-app-bar>

    <v-spacer class="mb-4"></v-spacer>

    <v-row class="carrusel">
    <v-col cols="11">
      <v-carousel height="430">
        <v-carousel-item>
          <v-img src="https://ouytfgyhujiko.000webhostapp.com/og__c59t0pflacq6.png" />
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="https://ouytfgyhujiko.000webhostapp.com/og__c59t0pflacq6.png" />
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="https://ouytfgyhujiko.000webhostapp.com/og__c59t0pflacq6.png" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

    <v-main>
     <v-container fluid>
       <div id="app">
         <router-view/>
       </div>
     </v-container>
    </v-main>

    <v-footer color="#2c3e50" app>
      <span class="white--text">&copy; Todos los derechos reservados 2023</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: false,
  }),
  props: {
    source: String,
  },
};
</script>
