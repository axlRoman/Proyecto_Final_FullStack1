<template>
  <v-form v-model="valido" ref="formulario" lazy-validation>
    <v-text-field
     label="Nombre"
     v-model="nombre"
     required
    ></v-text-field>
    <v-text-field
     label="Email"
     v-model="email"
     :rules="reglasEmail"
     required
    ></v-text-field>
    <v-text-field
     label="Contraseña"
     v-model="contrasenha"
     :counter="8"
     :rules="reglasContra"
     required
     type="password"
    ></v-text-field>
    <v-text-field
     label="Confirmar Contraseña"
     v-model="confirmar_contrasenha"
     required
     type="password"
    ></v-text-field>
    <v-btn
     @click="enviar()"
     :disabled="!valido"
     color="success"
    >Enviar</v-btn>
    <v-btn @click="limpiar" color="warning">Limpiar</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    nombre: '',
    email: '',
    contrasenha: '',
    confirmar_contrasenha: '',
    reglasEmail: [
      v => !!v || 'Email requerido',
      v => /\S+@\S+\./.test(v) || 'El email debe ser válido',
    ],
    reglasContra: [
      v => !!v || 'La contraseña no puede estar vacía',
      v => v.length >= 8 || 'La contraseña debe tener 8 o más caracteres',
    ],
  }),
  methods: {
    async enviar() {
      if (this.$refs.formulario.validate()) {
        if (this.contrasenha !== this.confirmar_contrasenha) {
          this.$swal('¡Oh no!', 'Las contraseñas no coinciden', 'error');
          return; // Stop the execution if passwords don't match
        }
        try {
          await axios.post('http://localhost:8081/usuarios/registro', {
            data: {
              nombre: this.nombre,
              email: this.email,
              contrasenha: this.contrasenha,
            },
            headers: {
              'Content-Type': 'application/json',
            },
          });

          this.$swal('¡Genial!', 'Registro exitoso', 'success');
          this.$router.push({ name: 'Login' });
        } catch (error) {
          const mensaje = error.response.data.mensaje;
          this.$swal('¡Oh no!', `${mensaje}`, 'error');
        }
      }
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>
