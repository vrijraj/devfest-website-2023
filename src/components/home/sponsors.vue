<template>
  <v-container fluid>
    <v-row v-for="(item, index) in sponsorsInfo" :key="index" class=" mb-10">
      <v-col md="12" class="mb-0 ">{{ item.category_name }}</v-col>
      <v-col md="3" v-for="(sponsor, indexp) in item.sponsors" :key="indexp">
        <v-div
          style="background-color: white; border-radius: 15px"
          class="pa-3"
        >
        {{ sponsor }}
          <!-- <v-img
            :src="require('@/assets/img/sponsors/' + sponsor.logo)"
          ></v-img> -->
          <!-- <p>logo</p> -->
        </v-div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sponsorsJSON from "@/assets/data/sponsors.json";
export default {
  name: "SponsorsComponets",
  data: () => ({
    sponsorsInfo: sponsorsJSON,
  }),
};
</script>

<style>
</style>