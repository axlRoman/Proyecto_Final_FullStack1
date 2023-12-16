<template>
  <v-layout row justify-center align-center>
  <v-row class="carrusel">
    <v-col cols="12">
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
    

      <v-card
        elevation="20"
        outlined
        shaped
        color="bold lighten-4"
        max-width="80%"
      >
        <v-card-title primary-title class="justify-center">
          <div class="headline font-weight-bold">Aplicaciones</div>
        </v-card-title>
        <img src="https://th.bing.com/th/id/OIP.tAnmrKhXx3VwiHKHGxp9FwHaDr?w=1089&h=540&rs=1&pid=ImgDetMain" class="imagen-apps">
        <v-card-text>
          <v-btn
            color="#49576C"
            class="font-weight-bold white--text"
            v-bind:to="{name: 'Aplicaciones'}"
          >Ver todo</v-btn>
        </v-card-text>
      </v-card>

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
