<template>
  <v-main class="pa-0 ma-0">
    <v-container fluid class="my-10">
      <v-row>
        <v-col md="12" sm="12" cols="12" class=" google-font">
            <div class="text-center">
          <p
            class="google-font gdg-h1 mb-2 grey--text text--darken-4"
            style="font-size: 220%"
          >
            Schedule
          </p>
          <p>
            Follow code demonstrations by our expert speakers on different
            tracks. Check out the schedule below and don't forget to mark your
            calendar so that you don't miss out on any sessions.
          </p>
        </div>
          <v-toolbar flat class="px-0" style="border-radius: 15px">
            <v-tabs
              v-model="model"
              color="primary"
              slider-color="primary"
              centered
            >
              <v-tab v-for="(item, index) in scheduleInfo" :key="index" >{{
                item.date
              }}</v-tab>
            </v-tabs>
          </v-toolbar>

          <v-tabs-items v-model="model" continuous class="mt-5 py-0" style="background-color: white;border-radius: 15px;">
            <v-tab-item v-for="(item, index) in scheduleInfo" :key="index" class="pa-0 ma-0" >
                <scheduleDetailsVue :data="item"/>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
  <script>
import scheduleJSON from "@/assets/data/schedule.json";
import scheduleDetailsVue from '@/components/schedule/scheduleDetails.vue';

export default {
  name: "SchedulePages",
  components: {
    scheduleDetailsVue
  },
  data: () => ({
    scheduleInfo: scheduleJSON,
    model: null,
  }),
};
</script>
  
  <style>
</style>