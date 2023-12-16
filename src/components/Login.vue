<template>
  <v-form class="formulario" v-model="valido" ref="formulario" lazy-validation>
    <v-text-field
     label="Email"
     v-model="email"
     :rules="reglasEmail"
     required
    ></v-text-field>
    <v-text-field
     label="Contraseña"
     v-model="contrasenha"
     type="password"
     :rules="reglasContra"
     required
    ></v-text-field>
    <v-btn
     @click="entrar"
     :disabled="!valido"
     color="success"
    >
    <v-icon rigth>mdi-checkbox-marked-circle</v-icon>Entrar</v-btn>
    <v-btn @click="limpiar" color="error"> <v-icon>mdi-close-circle</v-icon>Limpiar</v-btn>

    <v-spacer class="mb-4"></v-spacer>

    <v-btn class="font-weight-bold white--text" v-bind:to="{name: 'Registro'}"
    color="#49576C">Crear una cuenta</v-btn>

    <div class="general-margin-top">
    <v-btn color="#C25757" dark rounded>
      <v-icon left>mdi-google</v-icon>
      Ingresa con Google
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    email: '',
    contrasenha: '',
    reglasEmail: [
      v => !!v || 'Email requerido',
      v => /\S+@\S+\.\S+/.test(v) || 'Email debe ser válido',
    ],
    reglasContra: [
      v => !!v || 'La contraseña no puede estar vacía',
    ],
  }),
  methods: {
    async entrar() {
      if (this.$refs.formulario.validate()) {
        return axios({
          method: 'post',
          data: {
            email: this.email,
            contrasenha: this.contrasenha,
          },
          url: 'http://localhost:8081/usuarios/login',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((respuesta) => {
            window.localStorage.setItem('auth', respuesta.data.token);
            this.$swal('Genial!', 'Listo para iniciar', 'success');
            this.$router.push({ name: 'Inicio' });
            // eslint-disable-next-line no-console
            console.log(respuesta.data);
          })
          .catch((error) => {
            const mensaje = error.response.data.mensaje;
            this.$swal('Oh no!', `${mensaje}`, 'error');
            this.$router.push({ name: 'Inicio' });
          });
      }

      return true;
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};

</script>
