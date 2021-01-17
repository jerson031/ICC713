<template>
  <v-card class="mb-5">
    <v-img
      class="white--text"
      height="180px"
      :src="country.flag"
    >
      <v-card-title>{{ country.name }} </v-card-title>
    </v-img>
    <v-card-text>
      <div class="subtitle-1">Continente: {{ country.region }}</div>
      <div class="subtitle-1">Capital: {{ country.capital }}</div>
      <div class="subtitle-1">
        Población: {{ populationFormat(country.population) }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Country from '@/models/Country.js'
export default {
  props: {
    country: {
      type: Object,
      required: true,
      default: new Country()
    },
  },
  methods: {
    populationFormat(population) {
      // Expresión regular utilizada para agregar un punto cada 3 números
      return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
</style>