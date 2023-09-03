<template>
  <v-main>
    <v-container fluid>
      <v-row justify="start" align="start">
        <v-col md="10">
          <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
            Code of Conduct
          </p>
          <p class="my-0 mb-8 h1-subheading google-font">
            All participants of DevFest India 2023 event, online attendees,
            event staff, and speakers, must abide by the following policy:
          </p>
          <v-container fluid class="ma-0 pa-0">
            <v-row align="start" justify="start">
              <v-col
                md="4"
                cols="12"
                v-for="(item, index) in cocData"
                :key="index"
              >
                <!-- <v-avatar color="#4285f4" size="35">
                        <span class="white--text text-h6">{{index+1}}</span>
                      </v-avatar> -->
                <p class="google-font" style="font-size: 1.5em">
                  <b>{{ item.name }}</b>
                </p>
                <p class="google-font" style="font-size: 115%">
                  {{ item.des }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CodeOfConduct",
  data: () => ({
    cocData: [
      {
        name: "Be nice to the other attendees",
        des: "We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around. ",
      },
      {
        name: "Be respectful and constructive",
        des: "Remember to be respectful and constructive with your communication in discussions to fellow attendees. Don't get into flame wars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible.",
      },
      {
        name: "Be collaborative",
        des: "We are here to learn a lot from each other. Share knowledge, and help each other out. You may disagree with ideas, not people.",
      },
      {
        name: "Participate",
        des: "Be a good listener.  Be mentally present in the sessions you are interested in. Join in on discussions, show up for the sessions on time, offer feedback on your event experience, and help us get better in our community engagements.",
      },
      {
        name: "Basic etiquette for online discussions",
        des: "Keep off topic conversations to a minimum. Don’t be spammy by advertising or promoting personal projects which are off topic.",
      },
    ],
  }),
  created() {
    document.title = "Code of Conduct | DevFest India 2023";
  },
};
</script>

<style>
</style>