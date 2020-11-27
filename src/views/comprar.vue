<template>
  <v-app>
    <v-app-bar
      absolute
      color="red darken-4"
      dense
    >
      <v-toolbar-title><v-card-text class="text-center tituloFooter">
        <strong>KLS</strong>
      </v-card-text></v-toolbar-title>  
      <v-spacer></v-spacer>
      <v-btn tile text class="botones_appbar">
        Financiación
      </v-btn>
      <v-btn tile text class="botones_appbar">
        <v-icon left>mdi-cart</v-icon>
        Comprar Online
      </v-btn>
      
    </v-app-bar>
    <v-img></v-img>

    <v-card>
      <v-card-title class="justify-center tituloPorcentaje">
        El 85% de las personas prefiere comprar en KLS.
      </v-card-title>
      <chartjs-doughnut height="100px" :labels="labels" :datasets="datasets" :option="option"></chartjs-doughnut>

    </v-card>
    <v-card elevation="20">
      <v-tabs
          background-color="grey darken-3"
          centered
          dark
          fixed-tabs
          icons-and-text
      >
        <v-tab>
          Camionetas
          
        </v-tab>

        <v-tab>
          Carros
        </v-tab>

        <v-tab>
          Camiones
        </v-tab>
        <v-tab>
          Motos
        </v-tab>
        <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/RAV4-limited-4X4.png" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-RAV4</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/FJ-Cruiser.png" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-FJ CRUISER</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/LC200-imperial.png" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-LAND CRUISER 200</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img  src="https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/prado3.jpg" height="200px" width="200px"></v-img>
              <v-card-text class="text-center font-weight-bold">TOYOTA-PRADO</v-card-text>
            </v-col>
          </v-row>  
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/co/es/images/showroom/Cerato-Vivro/kia-Cerato-vivro-blanco.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-CERATO</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-RIO Hatchback</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-RIO Sedán</v-card-text>
            </v-col>
            <v-col  md="auto">
              <v-img class="mt-5" src="https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_ab_19my.png" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">KIA-SOLUTO</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img src="https://jacmotors.com.co/wp-content/uploads/2018/11/camion-jac-liviano-jhr-power.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">JAC-JHR Power+</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://jacmotors.com.co/wp-content/uploads/2018/11/camion-jac-liviano-jkr-medio-power.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">JAC-JKR Medio Power+</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://jacmotors.com.co/wp-content/uploads/2018/11/camion-jac-liviano-jkrd-doble-cabina-power.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">JAC-JKRD Doble Cabin Power</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img  src="https://jacmotors.com.co/wp-content/uploads/2018/11/camion-jac-mediano-jpr-max-power.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">JAC-JPR Maxx Power</v-card-text>
            </v-col>
          </v-row>  
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-row justify="space-around">
            <v-col md="auto">
              <v-img src="https://www.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/images/common/mainnavigation/72dpi/2020/nsc-master-mainnavigation-rninet_pure_P0N3E_300x180.jpg.asset.1602601591023.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">BMW-R NineT Pure</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://www.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/images/common/mainnavigation/72dpi/2019/nsc-master-mainnavigation-f900r-P0N3A_300x180.jpg.asset.1573052545701.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">BMW-S1000 R</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img src="https://www.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/images/common/mainnavigation/72dpi/2020/nsc-master-mainnavigation-g310gs-P0N3D_300x180.jpg.asset.1599641897209.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">BMW-G 310 GS</v-card-text>
            </v-col>
            <v-col md="auto">
              <v-img  src="https://www.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/images/common/mainnavigation/72dpi/rework/nsc-master-mainnavigation-R18PURE-POND2_300x180.jpg.asset.1585942267505.jpg" height="150px" width="250px"></v-img>
              <v-card-text class="text-center font-weight-bold">BMW-R18</v-card-text>
            </v-col>
          </v-row>  
        </v-card>
      </v-tab-item>
      </v-tabs>
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
  name: 'Inicio',
  data() {
    return {
    }
  },
    methods: {
    }
}
</script>