<template>
  <v-container fluid class="google-font">
    <v-row class="my-0">
      <v-col md="12">
        <p
          class="google-font gdg-h1 mb-2 grey--text text--darken-4"
          style="font-size: 220%"
        >
          Our Sponsors
        </p>
        <p class="mb-0">
          Sponsors dedicated to building remarkable experience!
        </p>
      </v-col>
    </v-row>
    <sponsorsDataVue/>
  </v-container>
</template>

<script>
import sponsorsDataVue from '../sponsors/sponsorsData.vue';
export default {
  name: "SponsorsComponets",
  components:{
    sponsorsDataVue
  },
  data: () => ({
  }),
};
</script>

<style>
</style>