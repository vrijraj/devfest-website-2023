<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
            DevFests in India
          </p>
          <p class="my-0 mb-8 h1-subheading google-font">
            Communities from each chapter, all over the India have gathered
            together to make India DevFest a success. Locate your nearest google
            developer group and join the event right here!
          </p>
        </v-col>
      </v-row>

      <!-- Loader -->
      <v-row align="start" justify="start" class="my-10" v-if="loader">
        <v-col md="3" sm="6" v-for="i in 4" :key="i">
          <v-skeleton-loader style="border-radius: 15px;" class="mx-auto" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <!-- Loader -->

      <!-- Upcoming DevFest -->
      <v-row align="start" justify="start" v-if="!loader">
        <v-col md="3" sm="6" v-for="(item, index) in data" :key="index">
          <devFestInfoDialogeVue :item="item" />
        </v-col>
      </v-row>
      <!-- Upcoming DevFest -->

      <!-- Past DevFests -->
      <p v-if="!loader" class="mt-10 mb-1">Past DevFests</p>
      <v-row align="start" justify="start" v-if="!loader">
        <v-col
          md="3"
          sm="6"
          v-for="(item, index) in PassedDevFests"
          :key="index"
        >
          <devFestInfoDialogeVue :item="item" />
        </v-col>
      </v-row>
      <!-- Past DevFests -->
    </v-container>
  </v-main>
</template>

<script>
import devFestInfoDialogeVue from "@/components/common/devFestInfoDialoge.vue";

export default {
  name: "CoCComponent",
  components: {
    devFestInfoDialogeVue,
  },
  data: () => ({
    data: [],
    PassedDevFests: [],
    loader: false
  }),
  mounted() {},
  created() {
    document.title = "DevFests in India | DevFest India 2023";
    this.getAllEvents();
  },
  methods: {
    async getAllEvents() {
      this.loader = true
      try {
        let res = await fetch(
          "https://raw.githubusercontent.com/devfestindia/devfest-india-data-2023/main/data/events.json"
        );
        res = await res.json();

        const PassedEvents = res.filter((i) => {
          return new Date(i.StartingDate) - new Date().setHours(0, 0, 0, 0) < 0;
        });
        this.PassedDevFests = PassedEvents;

        const ToBeHeldEvents = res.filter((i) => {
          return (
            new Date(i.StartingDate) - new Date().setHours(0, 0, 0, 0) >= 0
          );
        });

        const sortedToBeHeldEvents = ToBeHeldEvents.sort((a, b) => {
          return new Date(a.StartingDate) - new Date(b.StartingDate);
        });

        const results = [...sortedToBeHeldEvents];
        this.data = results;
        this.loader = false
      } catch (error) {
        console.log("error", error);
        this.loader = false
      }
    },
  },
};
</script>

<style>
</style>