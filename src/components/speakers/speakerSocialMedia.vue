<template>
  <div>
    <v-btn icon class="mr-1" :href="item.linkedin" v-if="item.linkedin.length">
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon class="mr-1" :href="item.twitter" v-if="item.twitter.length">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon class="mr-1" :href="item.web" v-if="item.web.length">
      <v-icon>mdi-web</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({}),
};
</script>

<style>
</style>