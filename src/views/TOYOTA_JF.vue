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
        <v-row class="justify-center">
            <v-col md=3>
                <v-card flat>
                    <v-card-tittle class="ml-4 especificaciones">ESPECIFICACIONES</v-card-tittle>
                    <v-card-text>
                        DIMENSIONES EXTERIORES
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Largo(mm)  <br>
                                Ancho(mm)<br>
                                Altura(mm)<br>
                                Tanque(Gal)<br>
                            </v-col>
                            <v-col>
                                4670<br>
                                1905<br>
                                1830<br>
                                19<br>
                            </v-col>
                            
                        </v-row>
                        <br>
                        MOTOR
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Denominación  <br>
                                Cilindraje<br>
                                Potencia Maxima<br>
                                Teconologia<br>
                            </v-col>
                            <v-col>
                                1GR-FE<br>
                                3956<br>
                                1830<br>
                                19<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md=5 >
                <v-img width="600" height="350" v-if="color===1" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/6color_fj-azul.png"></v-img>
                <v-img width="600" height="350" v-if="color===2" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/7color_fj-rojo.png"></v-img>
                <v-img width="600" height="350" v-if="color===3" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/5color_fj-blanco-y-negro.png"></v-img>
                <v-img width="600" height="350" v-if="color===4" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/1color_fj-blanco.png"></v-img>
                <div class="d-flex justify-center">
                    <v-btn class="mx-2" text icon @click="color=4"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/1.-BLANCO-1.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=3"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/5.-NEGRO.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=1"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/6.-AZUL-AHUMADO.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=2"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/7.-ROJO-1.png" ></v-btn>
                </div>
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
        color:4,
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
    .especificaciones{
        font-family: 'Titillium Web', sans-serif;
        font-weight: bolder;
    }
</style>