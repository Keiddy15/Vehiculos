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
      <v-btn @click="comprar" tile text class="botones_appbar">
        <v-icon left>mdi-cart</v-icon>
        Comprar Online
      </v-btn>
      
    </v-app-bar>
    
  </v-app>
</template>

<script>


export default {
  name: 'Appbar',
  data() {
    return {
    }
  },
  methods: {
    inicio(){
        this.$router.push({name:'Inicio'})
    },
    comprar(){
        this.$router.push({name:'Comprar'})
    },

    }
}
</script>

<style scoped>


</style>