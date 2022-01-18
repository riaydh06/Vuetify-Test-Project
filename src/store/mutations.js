export default {
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
    addCities({ cities }, {name, country}) {
        cities.push({
            id: Math.floor(Math.random() * 1000),
            name,
            country
        })
    },
    deleteCities({ cities }, {id}) {
       if (id > -1) {
        cities.splice(id, 1);
      }
    },
    updateCities({ cities }, {id, name, country}) {
        if (id > -1) {
         cities[id].name=name;
         cities[id].country=country
       }
    },
    
    // user
    addUser({ users }, {name, country}) {
        users.push({
            id: Math.floor(Math.random() * 1000),
            name,
            country
        })
    },
    deleteUser({ users }, {id}) {
       if (id > -1) {
        users.splice(id, 1);
      }
    },
    updateUser({ users }, {id, name, country}) {
        if (id > -1) {
            users[id].name=name;
            users[id].country=country
       }
    },
}