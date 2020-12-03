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
    
  }
}
</script>