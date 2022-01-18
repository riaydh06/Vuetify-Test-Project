export default {

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
    },
    addCar({ cars }, {name, type}) {
        cars.push({
            id: cars.length +1,
            name,
            type
        })
    },
    deleteCar({ cars }, {id}) {
       console.log(cars, id)
       if (id > -1) {
        cars.splice(id, 1);
      }
    },
    updateCar({ cars }, {id, name, type}) {
        if (id > -1) {
         cars[id].name=name;
         cars[id].type=type
       }
     },
}