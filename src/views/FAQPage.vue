<template>
  <v-main>
    <v-container fluid class="google-font">
      <v-row justify="start" align="start">
        <v-col md="8">
          <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
            Frequently asked questions
          </p>
          <p class="my-0 mb-8 h1-subheading">
            Need Answers? Everything you need to know
          </p>
          <v-expansion-panels flat accordion class="" style="border-radius: 15px;">
            <v-expansion-panel
              v-for="(faq, i) in faqsData"
              :key="i"
              class="px-0 mx-0"
              style="border-bottom: 1px solid #eeeeee"
            >
              <v-expansion-panel-header class="px-5">
                <p class="google-font" style="font-size: 110%; margin: auto">
                  {{ faq.question }}
                </p>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="grey lighten-4">
                <p
                  class="google-font text-left my-0 mt-5"
                  style="font-size: 100%"
                  v-html="faq.answer"
                ></p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "../assets/data/faq.json";
export default {
  name: "FAQPage",
  data: () => ({
    faqsData: data,
  }),
};
</script>

<style>
</style>