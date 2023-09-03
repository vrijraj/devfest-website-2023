<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="px-2">
      <v-col
        md="12"
        cols="12"
        class="text-center pa-md-10"
        style="background-color: white; border-radius: 15px"
      >
        <p
          class="google-font gdg-h1 mb-4 grey--text text--darken-4"
          style="font-size: 220%"
        >
          What to Expect
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 17px"
        >
          An annual event hosted by the Google Developers Group across the world
          to bring the technology closer to the developers. It is an all day
          developer conference where we aim to focus on multiple technologies
          through lightning talks, sessions, workshops, etc.
        </p>
      </v-col>

      <v-col md="12" class="pa-0 ma-0 mt-md-5 mt-2">
        <v-container fluid class="google-font px-0">
          <v-row align="start">
            <v-col md="4" cols="12" sm="4" v-for="(item, index) in whatWedo" :key="index">
              <div class="pa-md-6 pa-4" style="background-color: white; border-radius: 15px">
                <p style="font-size: 20px; font-weight: 600" class="mt-4">
                  {{ item.title }}
                </p>
                <p>{{ item.desc }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OverviewComponent",
  data: () => ({
    whatWedo: [
      {
        title: "Technical content",
        size: "15%",
        img: "https://developers.google.com/community/devfest/images/conference.svg",
        desc: "Events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas.",
      },
      {
        title: "Workshops",
        size: "25%",
        img: "https://developers.google.com/community/devfest/images/workshops.svg",
        desc: "Full-day workshops, hands-on experiences, hacking and debugging events, all centered on your favorite Google technologies.",
      },
      {
        title: "Networking",
        size: "21%",
        img: "https://developers.google.com/community/devfest/images/networking.svg",
        desc: "Meet and connect with other developers in your community.",
      },
    ],
  }),
};
</script>

<style>
</style>