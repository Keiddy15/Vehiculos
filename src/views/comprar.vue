<template>
  <v-app>
    <v-app-bar
      absolute
      color="red darken-4"
      dense
    > <v-btn text>
      <v-toolbar-title @click="inicio"><v-card-text class="text-center tituloFooter">
        
          <strong>KLS</strong>
        
        
      </v-card-text></v-toolbar-title> </v-btn> 
      <v-spacer></v-spacer>
      <v-btn tile text class="botones_appbar">
        Financiación
      </v-btn>
      <v-btn tile text class="botones_appbar">
        <v-icon left>mdi-cart</v-icon>
        Comprar Online
      </v-btn>
      
    </v-app-bar>
    <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Corolla-Home.jpg"></v-img>

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
        <v-col  md="auto" @click="TOYOTA_prado">
          <v-card flat>
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
  name: 'Comprar',
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