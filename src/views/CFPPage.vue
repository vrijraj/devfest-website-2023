<template>
  <v-main>
    <v-container fluid class="google-font">
      <v-row justify="start" align="start">
        <v-col md="10" sm="12" cols="12">
          <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
            Call for Presentations
          </p>
          <p class="my-0 mb-8 h1-subheading">
            Communities from each chapter, all over the India have gathered
            together to make India DevFest a success. Locate your nearest google
            developer group and join the event as a Speaker right here!
          </p>

          <v-card
            outlined
            style="background-color: white; border-radius: 15px; border: 0"
          >
            <v-card-title>
              CFPs
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                style="max-width: 500px"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                rounded
                dense
                solo-inverted
                hide-details
                flat
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="data"
              :search="search"
              mobile-breakpoint="0"
              :loading="loader"
            >
              <template v-slot:[`item.CommunityName`]="{ item }">
                <a :href="item.CommunityPage" target="_black">{{
                  item.CommunityName
                }}</a>
              </template>
              <template v-slot:[`item.DevFestName`]="{ item }">
                <a :href="item.EventLink" target="_black">{{
                  item.DevFestName
                }}</a>
              </template>
              <template v-slot:[`item.StartingDate`]="{ item }">
                {{ getDate(item.StartingDate) }}
              </template>
              <template v-slot:[`item.custom`]="{ item }">
                <a
                  v-if="
                    new Date(item.CFP.LastDate) >=
                    new Date().setHours(0, 0, 0, 0)
                  "
                  color="red"
                  style="font-size: 14px; text-decoration: underline"
                  :href="item.CFP.Link"
                  target="_black"
                  >Apply now
                </a>
                <a v-else class="disabled">Applications closed </a>
                <!-- <a :href="item.CFP.Link" target="_black">Apply now</a> -->
              </template>

              <template v-slot:[`item.deadline`]="{ item }">
                {{ getDate(item.CFP.LastDate) }}
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CPFPage",
  data: () => ({
    data: [],
    search: "",
    headers: [
      { text: "Community", value: "CommunityName" },
      { text: "City", value: "City" },
      { text: "DevFest", value: "DevFestName" },
      { text: "DevFest Date", value: "StartingDate" },
      { text: "CFP Link", value: "custom" },
      { text: "CFP Deadline", value: "deadline" },
    ],
    loader: true,
  }),
  created() {
    document.title = "Call for Presentations | DevFest Jalandhar 2023";
    this.getData();
  },
  methods: {
    async getData() {
      this.loader = true;
      try {
        this.loader = true;
        let res = await fetch(
          "https://raw.githubusercontent.com/devfestindia/devfest-india-data-2023/main/data/events.json"
        );
        res = await res.json();
        this.data = res.filter((e) => e.CFP.Status == 1);
        this.loader = false;
      } catch (error) {
        console.log(error);
        this.loader = false;
      }
    },
    getDate(d) {
      var date = new Date(d).toString().split("GMT");
      date = date[0].split(" ");
      return date[1] + " " + date[2] + ", " + date[3];
    },
  },
};
</script>

<style>
</style>