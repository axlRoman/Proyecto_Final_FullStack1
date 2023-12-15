<template>
  <v-layout row justify-center align-center>
    <v-flex xs4>
      <v-card
        elevation="40"
        outlined
        shaped
        color="blue lighten-4"
      >
        <v-card-title primary-title class="d-flex justify-center">
          <div class="headline font-weight-bold">Aplicaciones</div>
        </v-card-title>
        <img src="../assets/images/videojuegos.png" class="imagen-juego">
        <v-card-text>
          <v-btn
            rounded
            color="#AA00FF"
            class="font-weight-bold white--text"
            v-bind:to="{name: 'Aplicaciones'}"
          >Ver aplicaciones</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import '../assets/stylesheets/main.css';

export default {
  name: 'Aplicaciones',
  data() {
    return {
      aplicaciones: [],
    };
  },
  mounted() {
    this.obtenerAplicaciones();
  },
  methods: {
    async obtenerAplicaciones() {
      const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: 'http://localhost:8081/aplicaciones',
        headers: {
          Authorization: `JWT ${token}`,
          'Çontent-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.aplicaciones = respuesta.data.albumes;
          this.current_user = respuesta.data.current_user;
        })
        .catch(() => {
        });
    },
    async eliminarAplicacion(_id) {
      return axios({
        method: 'delete',
        url: `http://localhost:8081/aplicaciones/${_id}`,
      })
        .then(() => {
          this.obtenerAplicaciones();
        })
        .catch(() => {

        });
    },
    async eliminarAplicaciones() {
      return axios({
        method: 'delete',
        url: 'http://localhost:8081/aplicaciones',
      })
        .then(() => {
          this.obtenerAplicaciones();
        });
    },
  },
};
</script>
