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
    <h1 text-align: center>Mas Vistas</h1>
    <v-layout wrap md12>
      <v-flex
        v-for="(movie, index) in moviesFilter"
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
     <v-btn to=Pelicula :movie="movie"  text>Mas</v-btn>

  </v-container>
</template>

<script>
import ApiService from "@/services/api.service1";
import Movie from '@/models/Movie.js';
export default {
  data() {
    return {
      movies: [],
      search: "",
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.getPopular();
    }, 500);
  },
  computed: {
    moviesFilter() {
      return this.movies.filter((e) => {
        return e.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    getPopular() {
      ApiService
        .getPopular()
        .then((response) => {
          this.isLoading = false;
           
          
          console.log(response.data);
        
          this.movies =  response.data.results.map(movie => new Movie(movie));
          
          console.log(this.movies);
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