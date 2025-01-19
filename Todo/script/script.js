new Vue({
  el: '#app',
  data() {
    return {
      todos: [],
      text: ''
    };
  },
  computed: {
    doneTodo() {
      return this.todos.filter(todo => todo.isDone === true);
    },
    incompleteTodo() {
      return this.todos.filter(todo => todo.isDone === false);
    }
  },
  methods: {
    inputText(e) {
      this.text = e.target.value;
    },
    addTodo() {
      if (!this.text) return;
      const id = Math.ceil(Math.random() * 1000);
      this.todos.push({
        id,
        text: this.text,
        isDone: false
      });
      this.text = '';
    },
    toggleIsDone(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
});
