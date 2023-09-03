<template>
  <v-container fluid class="my-0">
    <v-row justify="center" align="center">
      <v-col md="6" cols="12" order-md="1" order="2">
        <p
          class="google-font gdg-h1 mb-4 grey--text text--darken-4"
          style="font-size: 320%"
        >
          DevFest India 2023
        </p>
        <p class="google-font mt-3" style="font-size: 19px">
          <v-icon>mdi-calendar-month</v-icon> September - December
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 18px"
        >
          An annual event hosted by the Google Developers Group across the world
          to bring the technology closer to the developers. It is an all day
          developer conference where we aim to focus on multiple technologies
          through lightning talks, sessions, workshops, etc.
        </p>
        <v-btn dark depressed to="/devfest" rounded color="#4285F4"
          >Find an Events
        </v-btn>
      </v-col>
      <v-col md="6" cols="12" order-md="2" order="1">
        <div class="text-center" v-if="loading">
          <v-skeleton-loader
            style="border-radius: 15px;height: 360px !important"
            class="mx-auto"
            type="image"
          ></v-skeleton-loader>
        </div>
        <iframe
          v-show="!loading"
          @load="load"
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/K6W9Usve6hI"
          title="DevFest India 2022 is here!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="border-radius: 15px; border: 0px solid black"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroComponent",
  data: () => ({
    loading: true,
  }),
  methods: {
    load() {
      this.loading = false;
    },
  },
};
</script>

<style>
</style>