<template>
  <v-container>
    <v-layout md12>
      <v-text-field
        v-model="search"
        append-icon="mdi-search"
        placeholder="Buscar"
        single-line
      />
    </v-layout>
    <Loader :isLoading="isLoading" />
    <v-layout wrap md12>
      <v-flex
        v-for="(Pagina1, index) in moviesFilter"
        :key="index"
        :search="search"
        @click="openMovie(movie.title)"
        md3
        sm4
        xs12
        px-2
      >
      <Pagina1 :movie="movie" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ApiService from "@/services/api.service1";
import Movie from '@/models/Movie.js';
export default {
  data() {
    return {
      Movies: [],
      search: "",
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.getMovies();
    }, 500);
  },
  computed: {
    moviesFilter() {
      return this.Movies.filter((e) => {
        return e.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    getMovies() {
      ApiService
        .getTopRated()
        .then((response) => {
          this.isLoading = false;
          // this.countries = response.data;
          console.log(response.data);
          this.Movies = response.data.map(movie => new Movie(movie));
          console.log(this.Movies);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    openMovie(title) {
      // this.$router.push(`/countries/${name}`);
      // this.$router.push({ path: `/countries/${name}` })
      this.$router.push({ title: 'Movie', params: { title } })
    }
  },
};
</script>

<style>
</style>