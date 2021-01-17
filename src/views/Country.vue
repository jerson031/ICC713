<template>
  <v-container>
    <h1>Nombre: {{ $route.params.name }}</h1>
    <Loader :isLoading="isLoading" />
    <CountryCard v-if="!isLoading" :country="country" />
  </v-container>
</template>

<script>
import apiService from "@/services/api.service";
export default {
  data() {
    return {
      country: {},
      isLoading: true,
    };
  },
  created() {
    this.getCountry();
  },
  methods: {
    getCountry() {
      apiService
        .getCountryByName(this.$route.params.name)
        .then((response) => {
          this.isLoading = false;
          this.country = response.data[0];
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error);
        });
    },
  },
};
</script>

<style>
</style>