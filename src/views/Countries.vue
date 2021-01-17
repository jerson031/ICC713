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
        v-for="(country, inex) in countriesFilter"
        :key="inex"
        :search="search"
        @click="openCountry(country.name)"
        md3
        sm4
        xs12
        px-2
      >
        <CountryCard :country="country" />
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import ApiService from "@/services/api.service";
import Cuntry from '@/models/Country.js';
export default {
  data() {
    return {
      countries: [],
      search: "",
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.getCountries();
    }, 500);
  },
  computed: {
    countriesFilter() {
      return this.countries.filter((e) => {
        return e.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    getCountries() {
      ApiService
        .getAllCountries()
        .then((response) => {
          this.isLoading = false;
          // this.countries = response.data;
          console.log(response.data);
          this.countries = response.data.map(cuntry => new Cuntry(cuntry));
          console.log(this.countries);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    openCountry(name) {
      // this.$router.push(`/countries/${name}`);
      // this.$router.push({ path: `/countries/${name}` })
      this.$router.push({ name: 'Country', params: { name } })
    }
  },
};
</script>