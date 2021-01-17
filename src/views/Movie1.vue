<template>
  <v-container>
    <h1>Titulo: {{ $route.params.title }}</h1>
    <Loader :isLoading="isLoading" />
    <Pagina1 v-if="!isLoading" :movie="movie" />
  </v-container>
</template>

<script>
import apiService from "@/services/api.service1";
export default {
  data() {
    return {
      movies: {},
      isLoading: true,
    };
  },
  created() {
    this.getCountry();
  },
  methods: {
    getCountry() {
      apiService
        .getTopRated(this.$route.params.title)
        .then((response) => {
          this.isLoading = false;
          this.movies = response.data.results[0];
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