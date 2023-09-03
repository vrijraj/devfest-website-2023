<template>
  <v-app-bar
    elevate-on-scroll
    fixed
    app
    elevation="3"
    class="px-md-5 px-0 mt-md-4 mt-sm-4 mt-0"
    style="
      background-color: white;
      max-width: 1024px;
      margin: auto;
      border-radius: 15px;
      -webkit-backdrop-filter: saturate(100%) blur(5px);
      backdrop-filter: saturate(100%) blur(10px);
    "
  >
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="mr-4 px-0 google-font">
      <router-link
        to="/"
        style="text-decoration: none; font-size: 100%; color: black"
      >
        DevFest India
      </router-link>
    </v-toolbar-title>

    <div class="hidden-sm-and-down google-font">
      <v-btn
        v-for="(page, index) in pages"
        :key="index"
        rounded
        text
        small
        class="mr-1"
        color="primary"
        :to="page.path"
        style="text-transform: none; font-size: 80%; font-weight: 500"
        >{{page.name}}</v-btn
      >
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
  
  <script>
export default {
  data: ()=>({
    pages: [
      { name: 'Home', path: '/' },
      { name: 'Speakers', path: '/speakers' },
      { name: 'Schedule', path: '/schedule' },
      { name: 'Badge', path: '/badge' },
      { name: 'Team', path: '/team' },
      { name: 'FAQ', path: '/faq' },
    ]
  }),
  methods: {
    toggleDrawer() {
      this.$store.commit("TOGGLE_DRAWER");
    },
  },
};
</script>
  
  <style>
</style>