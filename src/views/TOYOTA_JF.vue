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
    <v-img  src="https://www.toyota.com.ec/sites/default/files/galeria_fj_cruiser_3.jpg" height="300"></v-img>
    <v-card>
        <v-card-text dark class="text-center py-6 nombre">FJ CRUISER</v-card-text>
        <v-row>
            <v-col md=4>

            </v-col>
            <v-col md=4>
                <v-img v-show="color='azul'" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/6color_fj-azul.png"></v-img>
                <v-img v-show="color='rojo'" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/7color_fj-rojo.png"></v-img>
                <v-img v-show="color='negro'" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/5color_fj-blanco-y-negro.png"></v-img>
                <v-img v-show="color='blanco'" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/1color_fj-blanco.png"></v-img>
            </v-col>
            <v-col md=4>

            </v-col>
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
        color:'blanco'
    }
  },
  methods: {
    inicio(){
      this.$router.push({name:'Inicio'})
    },
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2? family = Titillium + Web: wght @ 700 & display = swap'); 
    .nombre{
        font-family: 'Titillium Web', sans-serif;
        font-weight: bolder;
        background-color: #202020;
        color:#FFFFFF !important;
        font-size: 40px;
    }
</style>