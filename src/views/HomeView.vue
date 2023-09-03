<template>
  <v-main class="pa-0 ma-0">
    <!-- Hero -->
    <heroVue class="my-md-5" />
    <!-- Hero -->

    <!-- Overview -->
    <overviewVue/>
    <!-- Overview -->

    <!-- Technologies -->
    <technologiesVue class="mt-10"/>
    <!-- Technologies -->

    <!-- Sponsors -->
    <homesponsors class="mt-10"/>
    <!-- Sponsors -->

    <!-- Social -->
    <homeSocialVue class="my-10"/>
    <!-- Social -->
  </v-main>
</template>

<script>
import heroVue from "@/components/home/hero.vue";
import overviewVue from '@/components/home/overview.vue';
import technologiesVue from '@/components/home/technologies.vue';
import homesponsors from '@/components/home/homeSponsors.vue';
import homeSocialVue from '@/components/home/homeSocial.vue';

export default {
  name: "HomePage",
  components: {
    heroVue,
    overviewVue,
    technologiesVue,
    homesponsors,
    homeSocialVue
  },
  data: () => ({
    
  }),
  created(){
    document.title = "DevFest India 2023";
  }
};
</script>
