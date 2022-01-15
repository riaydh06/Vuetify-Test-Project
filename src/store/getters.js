export default {
    all: state => state.todos,
    completed: state => state.todos.filter(todo => todo.completed),
    pending: state => state.todos.filter(todo => !todo.completed)
}