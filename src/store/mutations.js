import router from "../router"

export default {
    // login
    login({ users }, {email, password}) {
    const userIndex = users.findIndex(item=> item.email === email|| item.password === password )
      
      if(userIndex !== -1){
        router.push('/')
      }
    },
    // car
    addCar({ cars }, {name, type}) {
        cars.push({
            id: Math.floor(Math.random() * 1000),
            name,
            type
        })
    },
    deleteCar({ cars }, {id}) {
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

    // cities
    addCities({ cities, users }, {name, car, operator}) {
        cities.push({
            id: Math.floor(Math.random() * 1000),
            name,
            car: car.id,
            carName: car.name,
            operator: operator.id,
            operatorName: operator.name
        })

        const operatorIndex = users.findIndex(item=> item.id === operator.id)
        users[operatorIndex].password = Math.floor(100000 + Math.random() * 900000)
    },
    deleteCities({ cities }, {id}) {
       if (id > -1) {
        cities.splice(id, 1);
      }
    },
    updateCities({ cities }, {id, name, car, operator}) {
      console.log(name, car, operator)
        if (id > -1) {
         cities[id].name=name;
         cities[id].car=car.id
         cities[id].carName=car.name
         cities[id].operator=operator.id
         cities[id].operatorName=operator.name
       }


    },
    
    // user
    addUser({ users }, {name, email}) {
        users.push({
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            type: 'operator',
            password: ''
        })
    },
    deleteUser({ users }, {id}) {
       if (id > -1) {
        users.splice(id, 1);
      }
    },
    updateUser({ users }, {id, name, email}) {
        if (id > -1) {
            users[id].name=name;
            users[id].email=email
       }
    },
}