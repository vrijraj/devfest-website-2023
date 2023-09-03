<template>
  <v-container fluid class="my-0">
    <!-- Row 1 -->
    <v-row justify="center" align="center">
      <v-col md="12">
        <v-img
          max-height="380"
          style="border-radius: 15px"
          :src="require('@/assets/img/cover.png')"
        ></v-img>
      </v-col>
    </v-row>
    <!-- Row 1 -->

    <!-- Row 2 -->
    <v-row justify="center" align="center" class="my-md-10 my-4">
      <v-col md="8" cols="12" order-md="1" order-sm="2" class="py-md-10">
        <p
          class="google-font gdg-h1 mb-4 grey--text text--darken-4"
          style="font-size: 200%; line-height: 40px"
        >
          DevFest 2023 for <br />
          <span style="color: #4285f4">{{ communityInfo.community_name }}</span>
        </p>
        <p class="google-font mt-3 mb-0" style="font-size: 19px">
          <v-icon>mdi-calendar-month</v-icon> {{ devfestInfo.date }}
        </p>
        <p class="google-font mt-0" style="font-size: 19px">
          <v-icon>mdi-clock-time-eight-outline</v-icon> {{ devfestInfo.time }}
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 18px"
        >
          {{ devfestInfo.desc.short }}
        </p>
        <v-btn
          dark
          depressed
          rounded
          color="#4285F4"
          :href="devfestInfo.registration.link"
          v-if="devfestInfo.registration.status == 1"
          target="_blank"
          >Register Now
        </v-btn>
      </v-col>
      <v-col md="4" cols="12" order-md="2" order-sm="1" class="google-font">
        <v-container fluid class="px-0">
          <v-row>
            <v-col
              md="4" cols="4" sm="2"
              v-for="(item, index) in devfestInfo.stats.slice(0, 6)"
              :key="index"
            >
              <div style="background-color: #e9f1fb;border-radius: 15px;" class="text-center py-5">
                <p
                  class="mb-0"
                  style="font-size: 200%; font-weight: 900; color: #4285f4"
                >
                  {{ item.value }}
                </p>
                <p class="my-1">{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- Row 2 -->

  </v-container>
</template>

<script>
import devfestJSON from "@/assets/data/devfests.json";
import communityJSON from "@/assets/data/community.json";
export default {
  name: "HeroComponent",
  data: () => ({
    loading: true,
    communityInfo: communityJSON,
    devfestInfo: devfestJSON,
  }),
  methods: {},
};
</script>

<style>
</style>