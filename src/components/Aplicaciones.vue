<template>
  <v-flex>
    <div class="titulo-primario">¡Conece y califica tus aplicaciones favoritas!</div>
    <v-container>
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-img :src="item.src" height="350"></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
            <v-btn color="primary" @click="calificar">Calificar App</v-btn>
            <v-btn color="red" @click="resenhar()">Reseñar</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="button_categorias">

      <div class="button_agregar">
        <v-btn class="ma-2" v-bind:to="'/aplicaciones/agregar'" filled color="deep-purple accent-1">
          Agregar una aplicacion
        </v-btn>
      </div>

      <div class="categorias">
        <v-sheet class="mx-auto" max-width="1000">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="categoria in categorias" :key="categoria._id" v-slot="{ active }">
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="purple white--text"
                depressed
                rounded
                @click="handleClickCategoria(categoria)">
                {{ categoria }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </v-flex>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import StarRating from 'vue-star-rating';
import '../assets/stylesheets/main.css';

/* eslint-disable */

const wrapper = document.createElement('div');
// estado compartido
const estado = {
  nota: 0,
};
// crear componente en contenido
const ComponenteCalif = Vue.extend({
  data() {
    return {
      calif: 0,
    };
  },
  watch: {
    calif(nuevoValor) {
      estado.nota = nuevoValor;
    },
  },
  template: `
    <div class="rating">
      ¿Cuál fue su expriencia usando esta aplicacion?
      <star-rating v-model="calif" :show-rating="false"></star-rating>
    </div>   
  `,
  components: {
    'star-rating': StarRating,
  },
});

const componente = new ComponenteCalif().$mount(wrapper);

const img1 = require('@/assets/images/tiktok.png');
const img2 = require('@/assets/images/spotify.png');
const img3 = require('@/assets/images/docker.png');

export default {
  name: 'Aplicacion',
  data() {
    return ({
      items: [
        {
          src: img1,
          title: 'TikTok',
          description: 'Es una app de redes sociales que permite grabar,editar y compartir videos cortos en loop, con la posibilidad de añadir fondos musicales, efectos de sonido y filtros o efectos visuales.',
        },
        {
          src: img2,
          title: 'Spotify',
          description: 'Es un servicio de música, pódcasts y vídeos digitales que te da acceso a millones de canciones y a otro contenido de creadores de todo el mundo.',
        },
        {
          src: img3,
          title: 'Docker',
          description: 'Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.',
        },
      ],
      apps: [],
      categorias: [],
      model: null,
    });
  },
  mounted() {
    this.obtenerAplicaciones();
    this.obtenerCategoriasIniciales();
  },
  methods: {
    async obtenerAplicaciones() {
      // const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: 'http://localhost:8081/aplicaciones',
        headers: {
          // Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.aplicaciones = respuesta.data;
          // this.current_user = respuesta.data.current_user;
        })
        .catch(() => {
        });
    },
    async obtenerCategoriasIniciales() {
      try {
        const response = await axios.get('http://localhost:8081/categorias');
        console.log(response.data);
        this.categorias = [response.data[0].nombre];
        this.categorias.push(response.data[1].nombre);
        this.categorias.push(response.data[2].nombre);
      } catch (error) {
        console.error(error);
      }
    },
    async obtenerAaplicacionesPorCategoria(categoria) {
      // const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: `http://localhost:8081/aplicaciones/${categoria}`,
        headers: {
          // Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.aplicaciones = respuesta.data;
          // this.current_user = respuesta.data.current_user;
        })
        .catch(() => {
        });
    },
    async handleClickCategoria(categoria) {
      await this.obtenerAplicacionesPorCategoria(categoria);
      await this.agregarCategorias(categoria);
    },
    async agregarCategorias(categoria) {
      return axios({
        method: 'get',
        url: `http://localhost:8081/categorias/${categoria}`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          for (const referencia of respuesta.data[0].referencias) {
            this.categorias.push(referencia);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async calificar() {
      this.$swal({
        content: componente.$el,
        buttons: {
          confirm: {
            value: 0,
          },
        },
      });
    },
  },
};
</script>
