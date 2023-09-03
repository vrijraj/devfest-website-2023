<template>
  <v-main class="">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="4" cols="12">
          <p class="google-font gdg-h1 mb-0 grey--text text--darken-4">
            GDG Communities <br> across India
          </p>
          <p class="google-font" style="font-size: 18px">
            Communities from each chapter, all over the India have gathered
            together to make India DevFest a success. Locate your nearest google
            developer group and join them right here!
          </p>
        </v-col>
        <v-col md="8" cols="12">
          <div v-if="loading" class="my-md-15 text-center pa-15">
            <v-progress-circular
              indeterminate
              color="#4184F7"
              :width="5"
              :size="50"
            >
            </v-progress-circular>
          </div>

          <iframe
            v-show="!loading"
            @load="load"
            src="https://www.google.com/maps/d/embed?mid=1F9Lyn8xgdMJwGUWr-BC1rjKVVeZTlv3A&z=4"
            width="100%"
            height="500"
            style="border-radius: 18px; border: 0"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CommunitiesPage",
  data: () => ({
    loading: true,
  }),
  created() {
    document.title = "Communities | DevFest India 2023";
  },
  methods: {
    load() {
      this.loading = false;
    },
  },
};
</script>

<style>
</style>