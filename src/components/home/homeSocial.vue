<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="px-2 google-font">
      <v-col
        md="12"
        style="background-color: #D8F0FE; border-radius: 15px"
        class="text-center pa-10"
      >
        <p class="google-font gdg-h1 mb-2 grey--text text--darken-4">
          Keep in touch with {{ communityInfo.community_name }} for the latest
          announcements
        </p>
        <p>
          Stake out #{{ communityInfo.community_hashtag }} for the latest
          updates and news.
        </p>

        <v-btn
          icon
          class="mx-1"
          target="_blank"
          :href="communityInfo.social_links.linkedin"
          v-if="communityInfo.social_links.linkedin.length"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-1"
          target="_blank"
          :href="communityInfo.social_links.twitter"
          v-if="communityInfo.social_links.twitter.length"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-1"
          target="_blank"
          :href="communityInfo.social_links.instagram"
          v-if="communityInfo.social_links.instagram.length"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-1"
          target="_blank"
          :href="communityInfo.social_links.facebook"
          v-if="communityInfo.social_links.facebook.length"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-1"
          target="_blank"
          :href="communityInfo.social_links.youtube"
          v-if="communityInfo.social_links.youtube.length"
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communityJSON from "@/assets/data/community.json";
export default {
  name: "homeSocial",
  data: () => ({
    communityInfo: communityJSON,
  }),
};
</script>

<style>
</style>