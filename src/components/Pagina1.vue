<template>
  <v-card class="mb-5">
    <v-img
      class="white--text"
      height="180px"
      :src="movie.backdrop_path " >
      <v-card-title>{{ movie.title}} </v-card-title>

    </v-img>

    <v-card-text>
      <div class="subtitle-1">Ranking: {{ movie.vote_average }}</div>
      <div class="subtitle-1">Fecha: {{movie.release_date}}</div>

    </v-card-text>
  </v-card>
</template>

<script>
import Movie from '@/models/Movie.js'
export default {
  props: {
    movie: {
      type: Object,
      required: true,
      default: new Movie()
    },
  },

};
</script>

<style>
</style>