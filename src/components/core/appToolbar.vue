<template>
  <v-app-bar flat fixed app class="px-md-5 px-0" color="white">
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="mr-4 px-0 google-font">
      <router-link to="/" style="text-decoration: none; font-size: 100%;color: black;">
        DevFest India
      </router-link>
    </v-toolbar-title>

    <div class="hidden-sm-and-down google-font">
      <v-btn
        rounded
        text
        small
        class="mr-1"
        color="primary"
        to="/communities"
        style="text-transform: none;font-size: 80%;font-weight: 500;"
        >Communities</v-btn
      >
      <v-btn
        rounded
        text
        small
        class="mr-1"
        color="primary"
        to="/devfest"
        style="text-transform: none;font-size: 80%;font-weight: 500;"
        >Find An Event</v-btn
      >
      <v-btn
        rounded
        text
        small
        class="mr-1"
        color="primary"
        to="/badge"
        style="text-transform: none;font-size: 80%;font-weight: 500;"
        >Badge</v-btn
      >
      <v-btn
        rounded
        text
        small
        class="mr-1"
        color="primary"
        to="/cfp"
        style="text-transform: none;font-size: 80%;font-weight: 500;"
        >CFP</v-btn
      >
      <v-btn
        rounded
        text
        small
        class="mr-1"
        color="primary"
        to="/faq"
        style="text-transform: none;font-size: 80%;font-weight: 500;"
        >FAQs</v-btn
      >
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
  
  <script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.commit("TOGGLE_DRAWER");
    },
  },
};
</script>
  
  <style>
</style>