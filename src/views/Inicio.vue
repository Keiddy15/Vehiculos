<template>
  <v-app>
    <Appbar/>

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
          Camionetas
          
        </v-tab>

        <v-tab>
          Carros
        </v-tab>

        <v-tab>
          Camiones
        </v-tab>
        <v-tab>
          Motos
        </v-tab>
        <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/RAV4-limited-4X4.png" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-RAV4</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/FJ-Cruiser.png" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-FJ CRUISER</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/LC200-imperial.png" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-LAND CRUISER 200</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img  src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/prado3.jpg" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-PRADO</v-card-text>
            </v-col>
          </v-row>  
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/co/es/images/showroom/Cerato-Vivro/kia-Cerato-vivro-blanco.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-CERATO</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-RIO Hatchback</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-RIO Sedán</v-card-text>
            </v-col>
            <v-col  md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_ab_19my.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-SOLUTO</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img src="https://foton.com.co/dealers.rewebmkt.com/images/x20200309024805-mini-icone.png.pagespeed.ic.2h4A2-NEDD.webp" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">FOTON-FPR CUMMINS 5.0 TON.</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://foton.com.co/dealers.rewebmkt.com/images/x20200619074903-mini-nova.png.pagespeed.ic.91AVd7_8ad.webp" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">FOTON-FKR CUMMINS 3.5 TON</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://foton.com.co/dealers.rewebmkt.com/images/x20200309024036-mini-icone.png.pagespeed.ic.wyQYkfIH1m.webp" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">FOTON-FRR PLUS CUMMINS 6.5 TON.</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img  src="https://foton.com.co/dealers.rewebmkt.com/images/x20200309024549-mini-icone.png.pagespeed.ic.NczlOABJcz.webp" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">FOTON FTR-PLUS CUMMINS 11 TON.</v-card-text>
            </v-col>
          </v-row>  
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img src="https://a5i4f6g5.stackpathcdn.com/images/cms/Lateral-Gris.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">HONDA-CB 250 TWISTER Modelo 2021</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://a5i4f6g5.stackpathcdn.com/images/cms/Negro-ced2c.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">HONDA-CB 500F Modelo 2018</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://a5i4f6g5.stackpathcdn.com/images/cms/Azul-b8694.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">HONDA-CB 650R Modelo 2019</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img  src="https://a5i4f6g5.stackpathcdn.com/images/cms/Gris-2355c.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">HONDA-CB 1000R Modelo 2020</v-card-text>
            </v-col>
          </v-row>  
        </v-card>
      </v-tab-item>
      </v-tabs>
    </v-card>

    <Footer/>
  </v-app>
</template>

<script>

import Appbar from "@/components/Appbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'Inicio',
  components:{
    Appbar,Footer
  },
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
          src: 'https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/BANNERS-RAV4-XROAD.jpg',
        },
        {
          src: 'https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/FJ-Cruiser-1Banner.jpg',
        },
        {
          src: 'https://www.kia.com/co/images/showroom/NewRioSedan/Caracteristicas/rio_sedan_exterior_01_w.jpg',
        },
        {
          src: 'https://www.kia.com/co/images/showroom/soluto/caracteristicas/SOLUTO-3-W--.jpg',
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

.botones_appbar{
  border-width: 1px;
  border-style: solid;
  border-color: #B71C1C;
  border-left-color:rgb(255, 255, 255);
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