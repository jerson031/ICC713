<template>
  <v-app-bar app color="primary" dark>
    <router-link class="d-flex align-center" to="/">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </router-link>

    <v-spacer></v-spacer>

    
  
    <v-btn to="/Pelicula" text>Peliculas</v-btn>
    <v-btn to="/Pelicula2" text>Mas vistas</v-btn>
   
  </v-app-bar>
</template>