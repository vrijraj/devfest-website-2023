<template>
  <v-main class="pa-0 ma-0">
    <!-- Hero -->
    <heroVue class="my-md-15" />
    <!-- Hero -->

    <!-- Overview -->
    <overviewVue/>
    <!-- Overview -->

    <!-- Technologies -->
    <technologiesVue class="my-15"/>
    <!-- Technologies -->
  </v-main>
</template>

<script>
import heroVue from "@/components/home/hero.vue";
import overviewVue from '@/components/home/overview.vue';
import technologiesVue from '@/components/home/technologies.vue';


export default {
  name: "HomePage",
  components: {
    heroVue,
    overviewVue,
    technologiesVue
  },
  data: () => ({
    
  }),
  created(){
    document.title = "DevFest India 2023";
  }
};
</script>
