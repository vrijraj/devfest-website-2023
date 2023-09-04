  
<template>
  <v-navigation-drawer v-model="drawer" app width="300px" temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="google-font py-1" style="font-size: 130%">
          {{ devfestInfo.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <template v-for="(page, index) in pages">
        <v-list-item :to="page.path" class="google-font my-0 py-0" color="blue" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{page.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script>
import navbarJSON from "@/assets/data/navbar.json";
import devfestJSON from "@/assets/data/devfests.json";
export default {
  name: "AppDrawer",
  data: () => ({
    pages: navbarJSON,
    devfestInfo: devfestJSON,
  }),
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