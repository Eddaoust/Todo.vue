const vm = new Vue({
    el: '#app',
    data: {
        todo: null,
        todos: []
    },
    methods: {
        addTodo: function () {
            this.todos.push({id: Date.now(), name: this.todo, done: false})
            this.todo = null
        },
        deleteTodo: function (todo) {
            this.todos = this.todos.filter(function(t){
                return t.id !== todo.id;
            })
        },
        doneTodo : function(e) {
            if(e.target.classList.contains('list-is-active')){
                e.target.classList.remove('list-is-active')
            } else {
                e.target.classList.add('list-is-active')
            }
        }
    }
})