<template>
  <v-layout v-if="isLoading" md12 class="justify-center my-8">
    <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
  </v-layout>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
</style>