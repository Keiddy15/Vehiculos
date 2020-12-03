<template>
  <v-app>
    <Appbar/>
    <v-img class="mt-6" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Corolla-Home.jpg"></v-img>

    <v-card elevation="20" tile>
      <v-card-text class="text-center py-5  titulo">Tus sueños los tomamos como nuestros, Cual es tu preferido?</v-card-text>
      <v-row class="justify-space-around">
        <v-col  md="auto" >
          <v-card flat @click="TOYOTA_JF">
            <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/FJ-Cruiser.png" height="200" width="300"></v-img>
            <v-card-text class="text-center font-weight-bold">TOYOTA-FJ CRUISER</v-card-text>
          </v-card>
        </v-col>
        <v-col  md="auto">
          <v-card flat @click="CHEVR_spark">
            <v-img src="https://www.chevrolet.com.co/content/dam/chevrolet/south-america/master/espanol/index/cars/2019-spark-gt/colorizer/01-images/gris-galapagos-spark-gt-2019-betline-g03.jpg?imwidth=420" height="200" width="350"></v-img>
            <v-card-text class="text-center font-weight-bold">CHEVROLET-Spark GT</v-card-text>
          </v-card>
        </v-col>
        <v-col  md="auto" >
          <v-card flat @click="TOYOTA_prado">
            <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/prado3.jpg" height="200" width="300"></v-img>
            <v-card-text class="text-center font-weight-bold">TOYOTA-PRADO</v-card-text>
          </v-card>
        </v-col>
        
      </v-row>
      <v-row class="justify-space-around">
        <v-card flat @click="HONDA_cb">
          <v-img src="https://a5i4f6g5.stackpathcdn.com/images/cms/Gris-2355c.png" height="200" width="350"></v-img>
          <v-card-text class="text-center font-weight-bold">HONDA-CB 1000R Modelo 2020</v-card-text>
        </v-card>
        <v-card flat @click="FOTON_fkr">
          <v-img src="https://foton.com.co/dealers.rewebmkt.com/images/x20190510013953-8.jpeg.pagespeed.ic.ZgiMGar4mD.webp" height="200" width="400"></v-img>
          <v-card-text class="text-center font-weight-bold">FOTON-FKR CUMMINS 3.5 TON.</v-card-text>
        </v-card>
      </v-row>
    </v-card>

    <Footer/>
  </v-app>
</template>

<script>

import Appbar from "@/components/Appbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'Comprar',
  components:{
    Appbar,Footer
  },
  data() {
    return {
    }
  },
  methods: {
    inicio(){
      this.$router.push({name:'Inicio'})
    },
    TOYOTA_JF(){
      this.$router.push({name:'TOYOTA_JF'})
    },
    TOYOTA_prado(){
      this.$router.push({name:'TOYOTA_prado'})
    },
    HONDA_cb(){
      this.$router.push({name:'HONDA_cb'})
    },
    FOTON_fkr(){
      this.$router.push({name:'FOTON_fkr'})
    },
    CHEVR_spark(){
      this.$router.push({name:'CHEVR_spark'})
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2? family = Titillium + Web: wght @ 700 & display = swap'); 

.titulo{
  font-family: 'Titillium Web', sans-serif;
  font-size: 40px;
  background: #e52d27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #b31217, #e52d27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #b31217, #e52d27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



}
</style>