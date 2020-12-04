<template>
  <div>
    <v-app class="color">
      <v-card>
        <Appbar/>
      </v-card>
      <v-form v-model="valid" class="mt-15" @submit.prevent="register" action="#" method="post">
        <v-card elevation="15" color="#FFF" raised class="cardForm">
          <v-alert
              border="bottom"
              type="info"
              dismissible
              class="white--text"
          >
            Recuerde rellenar todos los campos del formulario.
          </v-alert>
          <v-alert type="error" v-if="validationError">Por favor, verifique los campos.
          </v-alert>
          <v-alert type="error" v-if="sendingError" dismissible>La información del pedido no pudo ser
            enviada, intetelo de nuevo.
          </v-alert>
          <v-col cols="12" sm="12" md="12">
            <v-row class="rowForm">
              <v-text-field
                  label='Nombre:'
                  v-model="nombre"
                  :rules="nombreReglas"
                  required
                  outlined
                  clearable
                  class="fields"
              >
              </v-text-field>
              <v-text-field
                  label='Apellido:'
                  v-model="apellido"
                  :rules="apellidoReglas"
                  required
                  outlined
                  clearable
                  class="fields"
              >
              </v-text-field>

            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row class="rowForm">
              <v-text-field
                  label="Cédula:"
                  v-model="cedula"
                  type="number"
                  :rules="cedulaReglas"
                  required
                  outlined
                  class="fields"
                  clearable
              ></v-text-field>
              <v-text-field
                  label="Dirección:"
                  v-model='direccion'
                  required
                  outlined
                  :rules="direccionReglas"
                  class="fields"
                  clearable
              ></v-text-field>

            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row class="rowForm">
              <v-text-field

                  label="Email:"
                  v-model='email'
                  required
                  :rules="emailReglas"
                  outlined
                  class="fields"
                  clearable
              ></v-text-field>
              <v-text-field
                  label="Celular:"
                  v-model='celular'
                  class="fields"
                  required
                  outlined
                  clearable
                  :rules="celularReglas"
              ></v-text-field>
            </v-row>
          </v-col>
          <div class="text-center">
            <v-btn class="red darken-4  white--text" :loading="loadingSend" block large @click="guardar_cliente">Enviar
            </v-btn>
          </div>
        </v-card>
      </v-form>
    </v-app>
  </div>

</template>

<script>
import Appbar from "@/components/Appbar";
import axios from 'axios'
export default {
  name: "Formulario",
  data() {
    return {
      info_cliente: [],
      valid: false,
      nombre: '',
      apellido: '',
      cedula: '',
      celular: '',
      direccion: '',
      email: '',
      validationError: false,
      sendingError: false,
      loadingSend: false,
      nombreReglas: [
        v => !!v || 'Los nombres son requeridos.'
      ],
      apellidoReglas: [
        v => !!v || 'Los apellidos son requeridos.'
      ],
      cedulaReglas: [
        v => !!v || 'La cédula es requerida.'
      ],
      direccionReglas: [
        v => !!v || 'La dirección es requerida.'
      ],
      celularReglas: [
        v => !!v || 'El celular es requerido.'
      ],
      emailReglas: [
        v => !!v || 'El email es requerido.'
      ],
    }
  },
  components: {
    Appbar
  },
  methods: {
    guardar_cliente() {
      this.info_cliente.push({
        nombre: this.nombre, apellido: this.apellido,  cedula: this.cedula,
        celular: this.celular, direccion: this.direccion, email: this.email
      })
      this.insertar_cliente()
      this.$router.push({name: 'Factura'});
    },
    insertar_cliente() {
      const path = 'http://localhost:5000/cliente';
      axios.post(path, this.info_cliente).then((result) => {
        console.log('uwu', result)
      })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@500&display=swap');


.main {
  background-color: #B71C1C !important;
}

.cardForm {
  padding: 30px;
  margin: 20px;
}

@media screen and (max-width: 425px) {
  .cardForm {
    margin: 10px 5px 5px 5px !important;
  }
}

.color {

}

@media screen and (min-width: 1440px) {
  .cardForm {
    margin-right: 5vw !important;
    margin-left: 5vw !important;
  }
}

</style>