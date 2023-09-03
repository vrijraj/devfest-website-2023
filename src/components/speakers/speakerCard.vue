<template>
  <v-dialog v-model="dialog" width="700" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <div
        class="mx-auto text-center py-7 google-font"
        style="border-radius: 12px; background-color: white"
        v-on="on"
        v-ripple
        v-bind="attrs"
      >
        <v-avatar size="100">
          <v-img
            :src="getProfileImage(item.image)"
            :lazy-src="getProfileImage(item.image)"
            :alt="item.name"
          ></v-img>
        </v-avatar>
        <p class="mb-1 mt-4" style="font-weight: 400">
          {{ item.name }}
        </p>
        <p class="my-0" style="font-size: 80%">{{ item.company.name }}</p>
      </div>
    </template>
    <v-card v-if="dialog" style="border-radius: 12px">
      <v-card-text class="pa-0 google-font">
        <v-container fluid class="">
          <v-row class="my-2">
            <v-col md="12" cols="12" class="px-md-8 px-3">
              <v-list class="pa-0 ma-0">
                <v-list-item class="pa-0 ma-0">
                  <v-list-item-avatar size="60">
                    <v-img
                      :src="getProfileImage(item.image)"
                      :lazy-src="getProfileImage(item.image)"
                      :alt="item.name"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="mb-0"
                      style="font-size: 150%; font-weight: 600"
                      >{{ item.name }}</v-list-item-title
                    >
                    <v-list-item-subtitle
                      v-if="item.company.name"
                      class="mb-0"
                      style="font-size: 110%"
                    >
                      <p class="mb-0">
                        {{ item.company.name }}, {{ item.company.designation }}
                      </p>
                      <span>{{ item.community_title }}</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12" cols="12" class="px-md-8 px-5">
              <div v-if="item.bio.length">
                <p class="mb-0" style="font-size: 110%"><b>Bio</b></p>
                <p class="" style="font-size: 110%">
                  {{ item.bio }}
                </p>
              </div>

              <speakerSocialMediaVue
                class="pl-0 ml-0 mb-2"
                :item="item.social"
              />

              <div v-if="speakerSessions.length" class="mt-6">
                <p class="mb-0">
                  <span v-if="speakerSessions.length>1"><b>Sessions</b></span>
                  <span v-else><b>Session</b></span>
                </p>
                <v-container fluid class="px-0">
                  <v-row>
                    <v-col
                      md="6"
                      sm="6"
                      cols="12"
                      v-for="(itemp, index) in speakerSessions"
                      :key="index"
                    >
                      <div style="background-color: #E8F1FB;border-radius: 15px" class="pa-3" >
                        <p style="font-size:120%" class="mb-0">{{ itemp.title }}</p>
                        <v-chip x-small color="white">{{ itemp.timeDuration }} min</v-chip>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn aria-label="close" class="px-5" text @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
    
    <script>
import speakerSocialMediaVue from "./speakerSocialMedia.vue";
import sessionsJSON from "@/assets/data/sessions.json";

export default {
  name: "SpeakerCard",
  components: {
    speakerSocialMediaVue,
  },
  props: ["item"],
  data: () => ({
    dialog: false,
    sessionsInfo: sessionsJSON,
    speakerSessions: [],
  }),
  watch: {
    dialog: {
      handler() {
        if (this.dialog) {
          this.getSessionsInfo(this.item.id);
        }
      },
    },
  },
  methods: {
    getProfileImage(img) {
      if (img.length == 0) {
        return require("@/assets/img/common/avatar.jpg");
      }
      return require("@/assets/img/speakers/" + img);
    },
    getSessionsInfo(spid) {
      this.speakerSessions = []
      this.sessionsInfo.forEach((session) => {
        if (session.speakers.includes(parseInt(spid))) {
          this.speakerSessions.push(session);
        }
      });
    },
  },
};
</script>