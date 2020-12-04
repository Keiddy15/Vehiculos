<template>
  <v-app>
    <Appbar/>
    <v-img src="https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2019-spark-gt/06-images/spark-gt-xl.jpg?imwidth=1200" height="370"></v-img>
    <v-card>
        <v-card-text dark class="text-center py-6 nombre">SPARK GT</v-card-text>
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
                                Tanque(Gal/L)<br>
                            </v-col>
                            <v-col>
                                3635<br>
                                1597<br>
                                1522<br>
                                9/35<br>
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
                                MT 5 speed<br>
                                4<br>
                                80.5 @ 6200<br>
                                16<br>
                            </v-col>
                            
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col md=5 >
                <v-img width="600" height="350" v-if="color===1" src="https://www.chevrolet.com.co/content/dam/chevrolet/south-america/master/espanol/index/cars/2019-spark-gt/colorizer/01-images/azul-noruega-spark-gt-2019-betline-g05.jpg?imwidth=420"></v-img>
                <v-img width="600" height="350" v-if="color===2" src="https://www.chevrolet.com.co/content/dam/chevrolet/south-america/master/espanol/index/cars/2019-spark-gt/colorizer/01-images/rojo-velvet-spark-gt-2019-betline-g06.jpg?imwidth=420"></v-img>
                <v-img width="600" height="350" v-if="color===3" src="https://www.chevrolet.com.co/content/dam/chevrolet/south-america/master/espanol/index/cars/2019-spark-gt/colorizer/01-images/negro-ebony-spark-gt-2019-betline-g07.jpg?imwidth=420"></v-img>
                <v-img width="600" height="350" v-if="color===4" src="https://www.chevrolet.com.co/content/dam/chevrolet/south-america/master/espanol/index/cars/2019-spark-gt/colorizer/01-images/blanco-galaxia-spark-gt-2019-betline-g02.jpg?imwidth=420"></v-img>
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
                        <v-card-text class="pa-0 mb-6"><strong >$37.040.000</strong></v-card-text> 
                        TRANSMISION
                        <v-divider></v-divider>
                        <v-row>
                            <v-col>
                                Descripcion  <br>
                            </v-col>
                            <v-col>
                                Mecánico sobre ruedas posteriores<br>
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
                                Automovil<br>
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
import axios from 'axios'
export default {
  name: 'Comprar',
  components:{
    Appbar,Footer
  },
  data() {
    return {
        color:4,
        info_carro: [],
        marca: 'Chevrolet',
        nombre: 'Spark GT',
        modelo: '2011',
        matricula: 'Kl32',
        tipo: 'Automovil',
        disponibilidad: 'Sí',
        valor_vehiculo:37040000
    }
  },
  methods: {
    comprar(){
      this.info_carro.push({
        marca: this.marca, nombre: this.nombre,  modelo: this.modelo,
        matricula: this.matricula, tipo: this.tipo, disponibilidad: this.disponibilidad,
        valor_vehiculo: this.valor_vehiculo, color: this.color
      })
      this.insertar_carro()
      this.$router.push({name: 'Formulario'});
    },
    insertar_carro() {
      const path = 'http://localhost:5000/carro';
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