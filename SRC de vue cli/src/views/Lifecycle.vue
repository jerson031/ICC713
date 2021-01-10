<template>
  <section>
    <h1>Ciclo de Vida - Instancia Vue</h1>
    <h3 v-for="step in steps" :key="step">{{ step }}</h3>
    <v-btn @click="destruir()">Destruir Instancia</v-btn>
    <hr class="my-4" />
    <h3>Counter: {{ counter }}</h3>
    <v-btn icon @click="counter--">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn icon @click="counter++">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <div v-html="innnerHTMLCounter"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [],
      counter: 0,
      innnerHTMLCounter: "",
    };
  },
  beforeCreate() {
    //esto se ejecuta ante o el momento que se crea vue
    console.log("beforeCreate");
    this.steps.push("beforeCreate");
    // this.alert();
  },
  created() {
    //al crear los metodos y observadores de eventos, pero aún no accede al DOM.
    //Aun no se puede acceder a 'el'
    this.steps.push("created");
  },
  beforeMount() {
    //se crearan los métodos observadores y eventos, pero aún no accede al DOM.
    //Aún no se puede acceder al 'el'
    this.steps.push("beforeMount");
  },
  mounted() {
    //se ejecuta al insertar al dom lee los observadores
    this.steps.push("mounted");
  },
  beforeUpdate() {
    //al detecatar los cambios
    console.log("beforeUpdate");
  },
  updated() {
    //al realizar los cambios
    console.log("updated");
  },
  beforeDestroy() {
    //antes de destruir la instacia
    this.steps.push("beforeDestroy");
  },
  destroyed() {
    //se destruye toda la instacia
    this.steps.push("destroyed");
  },
  watch: {
    counter(newCounter, oldCounter) {
      this.innnerHTMLCounter = `
        <li>El valor anterior del counter es: ${oldCounter}</li>
        <li>El nuevo valor del counter es: ${newCounter}</li>
      `;
      console.log(`El valor anterior del counter es: ${oldCounter}`);
      console.log(`El nuevo valor del counter es: ${newCounter}`);
    },
  },
  methods: {
    destruir() {
      this.$destroy();
    },
  },
};
</script>

<style>
</style>