<template>
  <v-app>
    <Appbar/>
    <v-img src="https://a5i4f6g5.stackpathcdn.com/images/cms/CB1000R-Honda-Motos.jpg" height="370"></v-img>
    <v-card>
        <v-card-text dark class="text-center py-6 nombre">HONDA-CB 1000R Modelo 2020</v-card-text>
        <v-row class="justify-center">
            <v-col md=3>
                <v-card flat>
                    <v-card-tittle class="ml-4 especificaciones">ESPECIFICACIONES</v-card-tittle>
                    <v-card-text>
                        DIMENSIONES EXTERIORES
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Rueda delantera  <br>
                                Rueda trasera<br>
                                Dimensión total<br>
                                Peso(Kg)<br>
                            </v-col>
                            <v-col>
                                120 / 70ZR-17 mm<br>
                                190 / 55ZR-17 mm<br>
                                2120 X 789 X 1095 <br>
                                212  <br>
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
                                DOHC <br>
                                998 cc<br>
                                144 HP @ 10500<br>
                                11,6:1<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md=5 >
                <v-img width="600" height="350" v-if="color===2" src="https://a5i4f6g5.stackpathcdn.com/images/cms/Rojo-5d4ab.png"></v-img>
                <v-img width="600" height="350" v-if="color===3" src="https://a5i4f6g5.stackpathcdn.com/images/cms/Negro-87749.png"></v-img>
                <v-img width="600" height="350" v-if="color===4" src="https://a5i4f6g5.stackpathcdn.com/images/cms/CB1000R.png"></v-img>
                <div class="d-flex justify-center">
                    <v-btn class="mx-2" text icon @click="color=4"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/1.-BLANCO-1.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=3"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/5.-NEGRO.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=2"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/7.-ROJO-1.png" ></v-btn>
                </div>
            </v-col>
            <v-col md=4>
              <v-card class="pt-3 mr-3">
                <v-card >
                    <v-card-tittle class="ml-4 especificaciones">PRECIO: </v-card-tittle>
                    <v-card-text>
                        <v-card-text class="pa-0 mb-6"><strong >$53.990.000</strong></v-card-text> 
                        TRANSMISION
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Descripcion  <br>
                            </v-col>
                            <v-col>
                                Mecánica de 6 velocidades<br>
                            </v-col>
                            
                        </v-row>
                        <br>
                        TIPO
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Tipo  <br>
                            </v-col>
                            <v-col>
                                Moto<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
                
              </v-card >
              <v-card class="mr-3 mt-6"  flat><v-btn color="red darken-4" class="mt-4" block>COMPRAR</v-btn></v-card>
            </v-col>
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
        color:4,
    }
  },
  methods: {
    
    
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