export default {
    addTodo({ todos }, text) {
        todos.push({
            text,
            completed: false
        })
    },
    removeTodo: ({ todos }, todo) => {
        todos.splice(todos.indexOf(todo), 1)
    },
    markTodo({ todos }, todo) {
        todos[todos.indexOf(todo)].completed = !todo.completed
    },
    markAllTodo({ todos }, completed) {
        todos.forEach(todo => (todo.completed = completed))
    },
    clearCompleted({ todos }) {
        todos.map(
            todo => (todo.completed ? todos.splice(todos.indexOf(todo), 1) : null)
        )
    }
}