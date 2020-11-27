<template>
  <v-app>
    <v-carousel>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-card>
      <v-card-title class="justify-center tituloPorcentaje">
        El 85% de las personas prefiere comprar en KLS.
      </v-card-title>
      <chartjs-doughnut height="100px" :labels="labels" :datasets="datasets" :option="option"></chartjs-doughnut>

    </v-card>
    <v-card elevation="20">
      <v-tabs
          background-color="grey darken-3"
          centered
          dark
          fixed-tabs
          icons-and-text
      >
        <v-tab>
          Camiones
        </v-tab>

        <v-tab>
          Carros
        </v-tab>

        <v-tab>
          Camioneta
        </v-tab>
        <v-tab>
          Motos
        </v-tab>
        <v-tab-item>
        <v-card flat>
          <v-card-text>ffddddddddddddddf</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          kfdmkdsfl
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          kfdmkdsfl
        </v-card>
      </v-tab-item>
      </v-tabs>
    </v-card>
    <v-footer class="footer">
      <v-card-text class="text-center">
        <v-btn
            class="mx-4"
            icon>
          <v-icon size="24px" color="black"> mdi-facebook</v-icon>
        </v-btn>
        <v-btn
            class="mx-4"
            icon>
          <v-icon size="24px" dark color="black"> mdi-instagram</v-icon>
        </v-btn>

      </v-card-text>
      <v-card-text class="text-center">
        <v-rating
            background-color=""
            color="white"
            size="30"
        ></v-rating>
      </v-card-text>
      <v-card-text class="text-center tituloFooter">
        <strong>KLS</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'Inicio',
  data() {
    return {
      labels: ['KLS', 'Otros'],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ['#B71C1C', '#424242'],
          hoverBackgroundColor: ['#FF5252', '#BDBDBD'],
        }
      ],
      option: {
        title: {
          text: 'KLS',
          display: true,
          position: 'bottom',
        }
      },
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      mensaje: []
    }
  },
    methods: {
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

.footer {
  background-color: #B71C1C !important;
}

.tituloFooter {
  font-family: 'Pacifico', cursive;
  font-size: 28px !important;
}

.tituloPorcentaje {
  font-size: 200% !important;
}
</style>