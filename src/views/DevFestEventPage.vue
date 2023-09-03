<template>
  <v-main class="pa-0 ma-0">
    <v-container fluid class="py-0">
      <v-row justify="center" align="center">
        <v-col
          md="12"
          sm="12"
          cols="12"
          lg="12"
          class="google-font my-md-6 my-2"
        >
          <v-img
            :src="require('@/assets/img/DF22-Banner.jpg')"
            height="300"
            class="white--text align-center"
            style="border-radius: 15px; border: 0px solid black"
          >
            <div class="ma-md-15 ma-5">
              <p class="mb-n2 devfest-name">
                {{ eventData.DevFestName }}
              </p>
              <a
                class="mt-n1"
                color="red"
                style="font-size: 17px; text-decoration: none"
                :href="eventData.CommunityPage"
                >{{ eventData.CommunityName }}</a
              >
              <p class="mt-4 mb-0">{{ getDate(eventData.StartingDate) }}</p>
              <p class="mt-0">
                {{ eventData.Venue }}, {{ eventData.City }},
                {{ eventData.State }}
              </p>

              <v-btn
                :href="eventData.EventLink"
                target="_blank"
                rounded
                color="primary"
                >More Info
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
            </div>
          </v-img>

          <p
            class="my-4 mb-3"
            style="font-size: 110%"
            v-html="eventData.Description"
          ></p>

          <p style="font-size: 15px" class="my-0">
            <b>Date:</b> {{ getDate(eventData.StartingDate) }} <br />
            <!-- <b>Date:</b> {{ eventData.Days }} <br> -->
            <b>Venue:</b> {{ eventData.Venue }}, {{ eventData.City }},
            {{ eventData.State }}
          </p>

          <p class="mb-0 mt-3"><b>Organized By</b></p>
          <a
            color="red"
            style="font-size: 17px; text-decoration: none"
            :href="eventData.CommunityPage"
            >{{ eventData.CommunityName }}</a
          >

          <div v-if="eventData.CFP.Status == 1" class="mt-5">
            <p class="mb-0"><b>Call For Presentations</b></p>
            <a
              v-if="
                new Date(eventData.CFP.LastDate) >=
                new Date().setHours(0, 0, 0, 0)
              "
              color="red"
              style="font-size: 17px; text-decoration: underline"
              :href="eventData.CFP.Link"
              >{{ `Apply now by ${getDate(eventData.CFP.LastDate)}` }}</a
            >
            <a v-else class="disabled">Not accepting proposals anymore</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
      
    <script>
import devfestData from "../assets/data/devfests.json";

export default {
  name: "CoCComponent",
  components: {},
  data: () => ({
    data: devfestData,
    loader: true,
    eventData: {},
  }),
  created() {
    this.loader = true;

    this.eventData = devfestData.filter(
      (res) =>
        res.City.toLocaleLowerCase() == this.$route.params.id.toLowerCase()
    )[0];

    if (this.eventData == null) {
      this.$router.push("/devfest");
    }

    document.title = this.eventData.DevFestName + " | DevFest India 2023";
  },
  methods: {
    getDate(d) {
      var date = new Date(d).toString().split("GMT");
      date = date[0].split(" ");
      return date[1] + " " + date[2] + ", " + date[3];
    },
  },
};
</script>
      
      <style scoped></style>
      