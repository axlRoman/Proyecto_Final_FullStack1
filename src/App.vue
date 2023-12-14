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

        <router-link v-bind:to="{name: 'Videojuegos'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-gamepad</v-icon>
            </v-list-item-action>
            <v-list-item-content>Videojuegos</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Peliculas'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-movie</v-icon>
            </v-list-item-action>
            <v-list-item-content>Peliculas</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Extra'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>Extra</v-list-item-content>
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
      color="#FFFFFF"
      dark
      shrink-on-scroll
      prominent
      src="https://static.vecteezy.com/system/resources/previews/014/762/255/non_2x/video-games-outline-colored-illustration-gamer-banner-vector.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(153, 50, 204,.7), rgba(107,35,96,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-title class="font-weight-bold">Nexus Of Entertainment</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn
        v-bind:to="{name: 'Login'}"
        rounded
        color="#81D4FA"
        class="black--text font-weight-bold"
      >Login</v-btn>
    </v-app-bar>
    <v-spacer class="mb-4"></v-spacer>

    <v-main>
     <v-container fluid>
       <div id="app">
         <router-view/>
       </div>
     </v-container>
    </v-main>

    <v-footer color="#81D4FA" app>
      <span class="black--text">&copy; Todos los derechos Reservados RomanTech 2019-2023</span>
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
