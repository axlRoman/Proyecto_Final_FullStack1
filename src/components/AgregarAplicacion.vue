<template>
    <v-form v-model="valido" ref="formulario" lazy-validation>
        <v-text-field
            label="Aplicacion:"
            v-model="nombre"
            :rules="reglasNombre"
            required
        ></v-text-field>
        <v-text-field
            label="Descripcion:"
            v-model="resumen"
            multi-line
        ></v-text-field>
        <v-select
            label="Categoria:"
            v-model="categoria"
            required
            :rules="reglasCategoria"
            :items="categorias"
        ></v-select>
        <v-text-field
            label="Desarrollador:"
            v-model="desarrollador"
            required
            :rules="reglasDesarrollador"
        ></v-text-field>
        <input type="file" @change="onFileChange" accept="image/*" required :rules="reglasImagen"/>
        <v-spacer> </v-spacer>
        <v-text-field disabled></v-text-field>
        <v-btn
            @click="guardar"
            :disabled="!valido"
        >Guardar</v-btn>
        <v-btn @click="limpiar">Limpiar</v-btn>
    </v-form>
</template>


<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    nombre: '',
    resumen: '',
    categoria: '',
    desarrollador: '',
    imagen: '',
    reglasNombre: [
      v => !!v || 'La aplicacion es requerida',
    ],
    reglasDesarrollador: [
      v => !!v || 'Desarrollador de la aplicacion es requerido',
      v => (v && v.length <= 30) || 'Desarrollador debe ser menor o igual a 30 caracteres',
    ],
    reglasCategoria: [
      v => !!v || 'La categoria es requerida',
    ],
    reglasImagen: [
      v => !!v || 'La imagen es requerida',
    ],
    select: null,
    categorias: [
      'Video juego',
      'Entretenimiento',
      'Utilidad',
      'Productividad',
      'Red social',
      'Musica',
    ],
  }),

  methods: {
    onFileChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        // Convertir la imagen a una URL legible
        this.imagen = URL.createObjectURL(selectedFile);
      }
    },
    guardar() {
      if (this.$refs.formulario.validate()) {
        // Realizar siguiente acción
        return axios({
          method: 'post',
          data: {
            nombre: this.nombre,
            resumen: this.resumen,
            categoria: this.categoria,
            desarrollador: this.desarrollador,
          },
          url: 'http://localhost:8081/aplicaciones',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            this.$swal(
              '¡Grandioso!',
              'Aplicacion guardada satisfactoriamente',
              'success',
            );
            this.$router.push({ name: 'Inicio' });
            this.$refs.formulario.reset();
          })
          .catch(() => {
            this.$swal(
              '¡¡Oh no!!',
              'Ocurrió un error y no pudimos agregar la aplicacion',
              'error',
            );
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
