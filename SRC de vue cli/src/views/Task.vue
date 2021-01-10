<template>
  <section>
    <h1>My tasks</h1>
    <div class="form-group">
      <v-text-field
        ref="newNote"
        v-model="newTodo"
        :rules="[rules.required]"
        placeholder="Crear una nota..."
        filled
        rounded
        clearable
        @keyup.enter="addNewTodo()"
      />
    </div>

    <v-card
      v-for="(todo, index) in todos"
      :key="index"
      class="px-8 mb-4 rounded-pill"
    >
      <div v-if="index === editIndex" class="d-flex align-center">
        <v-text-field
          v-model="editTodo.description"
          :rules="[rules.required, rules.min]"
          placeholder="Crear una nota..."
          type="text"
          prepend-icon="mdi-calendar-check"
        />
        <v-btn text @click="saveTask(true)">Cancelar</v-btn>
        <v-btn class="ml-2" color="success" text @click="saveTask(true)">
          Guardar
        </v-btn>
      </div>
      <div v-else class="d-flex align-center">
        <v-checkbox v-model="todo.status" />
        <span :class="{ 'task-completed': todo.status }">
          {{ todo.description }}
        </span>
        <v-spacer />
        <v-btn color="primary" icon @click="editTask(index)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn color="error" icon @click="deleteTodo(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-card>

    <pre>{{ $data }} </pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
      editTodo: null,
      editIndex: -1,
      rules: {
        required: (value) => !!value || "Campo Requerido",
      },
    };
  },
  methods: {
    addNewTodo() {
      if (this.newTodo.length > 0) {
        this.todos.push({
          description: this.newTodo,
          status: false,
        });
        this.newTodo = "";
        this.$refs.newNote.reset();
      }
    },
    changeStatus(index) {
      this.todos[index].status = !this.todos[index].status;
    },
    editTask(index) {
      // Utilizamos el spread-operator para crear una copia del elemento seleccionado
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator
      // Esto se realiza para evitar la referencia entre el elemento seleccionado y editTodo
      // Si solo hicieramos this.editTodo = this.todos[index], cada vez que editemos editTodo cambiara
      // automaticamente nuestro arreglo, lo cual no queremos en este caso
      this.editTodo = { ...this.todos[index] };
      // Guardamos el index para mostrar el input con el v-if en el HTML
      this.editIndex = index;
    },
    saveTask(status) {
      // Si status es true guardamos los cambios
      if (status) {
        this.todos[this.editIndex].description = this.editTodo.description;
      }
      this.editTodo = null;
      this.editIndex = -1;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.task-completed {
  color: #9aa0a6;
  text-decoration: line-through;
}
</style>