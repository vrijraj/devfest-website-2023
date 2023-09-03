  
<template>
  <v-navigation-drawer v-model="drawer" app width="300px" temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="google-font py-1" style="font-size: 130%">
          DevFest India
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item to="/" class="google-font my-0 py-0" color="blue">
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/communities" class="google-font my-0 py-0" color="blue">
        <v-list-item-content>
          <v-list-item-title>Communities</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/devfest" class="google-font my-0 py-0" color="blue">
        <v-list-item-content>
          <v-list-item-title>Find An Event</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/badge" class="google-font my-0 py-0" color="blue">
        <v-list-item-content>
          <v-list-item-title>Badge</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/faq" class="google-font my-0 py-0" color="blue">
        <v-list-item-content>
          <v-list-item-title>FAQ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script>
export default {
  name: "AppDrawer",
  data: () => ({}),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
</script>
  
  <style></style>