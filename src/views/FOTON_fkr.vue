<template>
  <v-app>
    <Appbar/>
    <v-img src="https://www.revistaturbo.com/sites/default/files/camionefoton.jpg" height="500"></v-img>
    <v-card>
        <v-card-text dark class="text-center py-6 nombre">FOTON-FKR CUMMINS 3.5 TON.</v-card-text>
        <v-row class="justify-center">
            <v-col md=3>
                <v-card flat>
                    <v-card-tittle class="ml-4 especificaciones">ESPECIFICACIONES</v-card-tittle>
                    <v-card-text>
                        DIMENSIONES EXTERIORES
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Capacidad de carga(kg)<br>
                                Dirección<br>
                                Peso bruto vehicular (Kg)<br>
                                Peso en vacío(Kg)<br>
                            </v-col>
                            <v-col>
                                3500<br>
                                Asistida Hidráulicamente<br>
                                5925<br>
                                2425  <br>
                            </v-col>
                            
                        </v-row>
                        <br>
                        MOTOR
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Denominación  <br>
                                Cilindraje(cc)<br>
                                Potencia Maxima(rpm)<br>
                                Teconologia<br>
                            </v-col>
                            <v-col>
                                ISF2.8s4148V <br>
                                2776<br>
                                3,200<br>
                                ABS<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md=5 >
                <v-img width="600" height="350" v-if="color===4" src="https://foton.com.co/dealers.rewebmkt.com/images/x20201106055813-6.png.pagespeed.ic.W9kaiXUSpT.webp"></v-img>
            </v-col>
            <v-col md=4>
              <v-card class="pt-3 mr-3">
                <v-card >
                    <v-card-tittle class="ml-4 especificaciones">PRECIO: </v-card-tittle>
                    <v-card-text>
                        <v-card-text class="pa-0 mb-6"><strong >$78.990.000</strong></v-card-text> 
                        TRANSMISION
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Descripcion  <br>
                            </v-col>
                            <v-col>
                                4x2<br>
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
                                Camion<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
                
              </v-card >
              <v-card class="mr-3 mt-6"  flat><v-btn color="red darken-4" class="mt-4" block @click="comprar">COMPRAR</v-btn></v-card>
            </v-col>
        </v-row>
    </v-card>
    
    <Footer/>
  </v-app>
</template>

<script>

import Appbar from "@/components/Appbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: 'Comprar',
  components:{
    Appbar,Footer
  },
  data() {
    return {
      color:4,
      info_carro: [],
      marca: 'FOTN',
      nombre: 'fkr',
      modelo: '2015',
      matricula: 'K2L2',
      tipo: 'Camión',
      disponibilidad: 'Sí',
      valor_vehiculo:78990000,
      capacidad_carga: 3500,
      traccion: 'ISF2.8s4148V'
    }
  },
  methods: {
    comprar(){
      this.info_carro.push({
        marca: this.marca, nombre: this.nombre,  modelo: this.modelo,
        matricula: this.matricula, tipo: this.tipo, disponibilidad: this.disponibilidad,
        valor_vehiculo: this.valor_vehiculo, color: this.color, capacidad_carga: this.capacidad_carga, traccion: this.traccion
      })
      this.insertar_carro()
      this.$router.push({name: 'Formulario'});
    },
    insertar_carro() {
      const path = 'http://localhost:5000/camion';
      axios.post(path, this.info_carro).then((result) => {
        console.log('uwu', result)
      })
          .catch((error) => {
            console.log(error);
          });
    }

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