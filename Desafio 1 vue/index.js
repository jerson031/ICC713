const app = new Vue({
    el: "#app",
    data: {
        newTodo: '',
        newTodo2: '',
        newTodo3: '',
        error: '',
        todos: [],
        nombre: [],
        description: [],
        precio: [],
        editTodo: null,
         
        editIndex: -1
    },




    methods: {
        addNewTodo() {
           
            if (this.newTodo.length > 0 && this.newTodo2.length > 0 && this.newTodo3.length > 0  ) {
          
                this.nombre.push({
                    description: this.newTodo,
                    status: false
                });
               
                this.description.push({
                    description: this.newTodo2,
                    status: false
                });
                this.precio.push({
                    description: this.newTodo3,
                    status: false
                });
                var pri = document.getElementById("Pri").value.length ;
             console.log(pri)
                this.newTodo = '';
                this.error = '';
                this.newTodo2 = '';
                this.error = false;
                this.newTodo3 = '';
               this.error = false;

            }if(pri>0){
               
            } 

            
            else {
                this.error = 'Campo requerido';
            }
        },



        changeStatus(index) {
            this.nombre[index].status = !this.nombre[index].status;
            this.description[index].status = !this.description[index].status;
            this.precio[index].status = !this.precio[index].status;
        },

        editTask(index) {
            // Utilizamos el spread-operator para crear una copia del elemento seleccionado
            // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator
            // Esto se realiza para evitar la referencia entre el elemento seleccionado y editTodo
            // Si solo hicieramos this.editTodo = this.todos[index], cada vez que editemos editTodo cambiara
            // automaticamente nuestro arreglo, lo cual no queremos en este caso
            this.editTodo = { ...this.nombre[index] };
            this.editTodo = { ...this.description[index] };
            this.editTodo = { ...this.precio[index] };
            // Guardamos el index para mostrar el input con el v-if en el HTML
            this.editIndex = index;
        },

        saveTask(status) {
            // Si status es true guardamos los cambios
            if (status) {
                this.nombre[this.editIndex].description = this.editTodo.description;
                this.description[this.editIndex].description = this.editTodo.description;
                this.precio[this.editIndex].description = this.editTodo.description;
            }
            this.editTodo = null;
            this.editIndex = -1;
        },

        deleteTodo(index) {
            this.nombre.splice(index, 3);
            this.description.splice(index, 3);
            this.precio.splice(index, 3);
        }
    },
})
