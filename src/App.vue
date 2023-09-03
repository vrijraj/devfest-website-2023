<template>
  <v-app style="background-color: #F3F6FB">
    <appToolbarVue/>
    <appDrawerVue/>
    <v-main class="">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col md="10">
            <v-slide-y-reverse-transition>
            <router-view v-show="show"/>
          </v-slide-y-reverse-transition>
          </v-col>
        </v-row>
      </v-container>
     
    </v-main>
    <appFooterVue/>
  </v-app>
</template>

<script>
import appDrawerVue from './components/core/appDrawer.vue';
import appFooterVue from './components/core/appFooter.vue';
import appToolbarVue from './components/core/appToolbar.vue';
export default {
  name: 'App',
  components:{
    appToolbarVue,
    appFooterVue,
    appDrawerVue
  },
  data: () => ({
    show: false,
  }),
  created() {
    this.show = true;
  }
};
</script>
