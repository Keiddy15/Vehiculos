<template>
  <div>
    <v-app class="color">
      <v-card>
        <Appbar/>
      </v-card>
      <v-form class="mt-15" @submit.prevent="register" action="#" method="post" >
        <v-card elevation="15" color="#FFF" raised class="cardForm">
          <v-col cols="12" sm="12" md="12">
            <v-row class="rowForm">
              <p>Nombre:</p>
              <p>Apellido</p>

            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row class="rowForm">
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-row class="rowForm">

            </v-row>
          </v-col>
          <div class="text-center">
            <v-btn class="red darken-4  white--text" :loading="loadingSend" block large @click="cliente">Comprar
            </v-btn>
          </div>
        </v-card>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Factura",
  methods: {
    cliente() {
      const path = 'http://localhost:5000/cliente_info';
      axios.get(path).then((result) => {
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