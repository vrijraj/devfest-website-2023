<template>
    <v-dialog v-model="dialog" width="800" scrollable>
      <template v-slot:activator="{ on, attrs }">
        <div
          v-on="on"
          v-bind="attrs"
          style="
            cursor: pointer;
            background: white;
            border-radius: 25px;
          "
          class="py-n5 ma-0"
        >
          <v-card ripple flat class="px-2 py-2 google-font" rounded="lg" style="border-radius:15px">
            <v-img
              :src="require('@/assets/img/cardcover.png')"
              :lazy-src="require('@/assets/img/cardcover.png')"
              :alt="item.DevFestName"
              position="left"
              height="140px"
              class="white--text align-center"
            >
              <p class="mt-15 float-left ml-5" style="font-size:14px">{{ item.City }}</p>
            </v-img>
            <v-card-title>
              <div>
                <span>{{ item.DevFestName }}</span>
                <p class="mt-n2" style="font-size: 70%">
                  <v-icon class="ml-0" small>mdi-calendar-month</v-icon>
                  {{ getDate(item.StartingDate) }}
                </p>
              </div>
            </v-card-title>
            <!-- <v-card-subtitle class="mt-n9">
              <div>
                <v-icon small>mdi-calendar-month</v-icon>
                {{ getDate(item.StartingDate) }}
              </div>
            </v-card-subtitle> -->
  
            <v-card-actions class="mt-n8">
              <v-btn color="primary" text> See More </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </template>
      <v-card class="google-font" v-if="dialog" style="border-radius: 12px;border:0">
        <v-card-text class="pa-0">
          <v-container fluid class="pt-8">
            <v-row class="px-md-7 px-3" justify="center" align="center">
              <v-col md="10" class="">
                <p class="google-font gdg-h1 mb-0 grey--text text--darken-4">
                  {{ item.DevFestName }}
                </p>
              </v-col>
              <v-col md="2" class="text-right d-none d-sm-block">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      fab
                      text
                      :to="'/devfest/' + item.City"
                      target="_blank"
                      ><v-icon>mdi-open-in-new</v-icon></v-btn
                    >
                  </template>
                  <span>View in New Tab</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid class="py-0 pt-n10">
            <v-row>
              <v-col md="12" cols="12" class="px-md-10 px-5">
                <p style="font-size: 15px" class="my-0">
                  <b>Date:</b> {{ getDate(item.StartingDate) }} <br />
                  <!-- <b>Date:</b> {{ getDate(item.Days) }} <br /> -->
                  <b>Venue:</b> {{ item.Venue }}, {{ item.City }},
                  {{ item.State }}
                </p>
                <p
                  class="mt-4"
                  style="font-size: 17px"
                  v-html="item.Description"
                ></p>
  
                <p class="mb-0">Organized By</p>
                <a
                  color="red"
                  style="font-size: 17px; text-decoration: underline"
                  :href="item.CommunityPage"
                  >{{ item.CommunityName }}</a
                >
                
                <div  v-if="item.CFP.Status==1" class="mt-5">
                <p class="mb-0">Call For Presentations</p>
                <a
                  v-if="new Date(item.CFP.LastDate) >= new Date()"
                  color="red"
                  style="font-size: 17px; text-decoration: underline"
                  :href="item.CFP.Link"
                  >{{  `Apply now by ${getDate(item.CFP.LastDate)}` }}</a
                >
                <a
                  v-else
                  class="disabled"
                  >Not accepting proposals anymore</a
                >
              </div>
                <br /><br />
  
                
  
                <v-btn
                  dark
                  depressed
                  :href="item.EventLink"
                  target="_blank"
                  rounded
                  color="#4285F4"
                  >More Info
                  <v-icon right>mdi-open-in-new</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
  
        <!-- <v-divider></v-divider> -->
  
        <v-card-actions class="white">
          <v-spacer></v-spacer>
          <v-btn aria-label="close" class="px-10" text @click="dialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
      
      <script>
  export default {
    props: ["item"],
    data: () => ({
      dialog: false,
    }),
    methods: {
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