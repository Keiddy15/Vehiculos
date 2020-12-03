<template>
  <v-app>
    <Appbar/>
    <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/BANNER_PRADO_VX-1-1.jpg" height="500"></v-img>
    <v-card>
        <v-card-text dark class="text-center py-6 nombre">PRADO</v-card-text>
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
                                4840<br>
                                1885<br>
                                1890<br>
                                23<br>
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
                                V6+24 Válvulas<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md=5 >
                <v-img width="600" height="350" v-if="color===1" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/AZUL-NOCTURNO-1.jpg"></v-img>
                <v-img width="600" height="350" v-if="color===2" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/ROJO-13.jpg"></v-img>
                <v-img width="600" height="350" v-if="color===3" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/NEGRO-11-1.jpg"></v-img>
                <v-img width="600" height="350" v-if="color===4" src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/SUPER-BLANCO-13.jpg"></v-img>
                <div class="d-flex justify-center">
                    <v-btn class="mx-2" text icon @click="color=4"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/1.-BLANCO-1.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=3"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/5.-NEGRO.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=1"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/6.-AZUL-AHUMADO.png" ></v-btn>
                    <v-btn class="mx-2" text icon @click="color=2"><img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/7.-ROJO-1.png" ></v-btn>
                </div>
            </v-col>
            <v-col md=4>
              <v-card class="pt-3 mr-3">
                <v-card >
                    <v-card-tittle class="ml-4 especificaciones">PRECIO: </v-card-tittle>
                    <v-card-text>
                        <v-card-text class="pa-0 mb-6"><strong >$228.600.000</strong></v-card-text> 
                        TRANSMISION
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Descripcion  <br>
                            </v-col>
                            <v-col>
                                ETC-i Secuencial (6 Velocidades)<br>
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
                                Camioneta<br>
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