export default {
    cars: [
        {id: 1, name: 'car1', type: 'Hatchback'},
        {id: 2, name: 'car2', type: 'Sedan'},
        {id: 3, name: 'car3', type: 'Sports car'},
        {id: 6, name: 'car6', type: 'Sports car'},
        {id: 7, name: 'car7', type: 'Sports car'},
        {id: 9, name: 'car9', type: 'Sports car'},
    ],
    users: [
        {id: 1, type: 'manager', name: 'manager', email: 'email@gmail.com', password: '123456'},
        {id: 2, type: 'operator', name: 'operator', email: 'email2@gmail.com', password: '123456'},
        {id: 4, type: 'operator', name: 'operator2', email: 'email24@gmail.com', password: '123456'},
        {id: 5, type: 'operator', name: 'operator6', email: 'email34@gmail.com', password: ''},
        {id: 6, type: 'operator', name: 'operator7', email: 'email4@gmail.com', password: ''}
    ],
    cities: [
        {id:1 , name: 'dhaka', operator: 2, operatorName: 'operator', car: 1, carName: 'car1'},
        {id:2 , name: 'gazipur', operator: 6, operatorName: 'operator7', car: 3, carName: 'car3'},
    ],
    reports: [
        { id: 1, operatorId: 1, operatorName: 'operator1', date: '2022-01-12', time: '10:16'},
        { id: 2, operatorId: 3, operatorName: 'operator6', date: '2022-01-14', time: '10:30'},
        { id: 3, operatorId: 4, operatorName: 'operator4', date: '2022-01-16', time: '12:16'},
        { id: 4, operatorId: 6, operatorName: 'operator2', date: '2022-01-17', time: '15:16'},
        { id: 6, operatorId: 1, operatorName: 'operator1', date: '2022-01-11', time: '10:16'},
        { id: 7, operatorId: 3, operatorName: 'operator6', date: '2022-01-14', time: '10:30'},
        { id: 8, operatorId: 4, operatorName: 'operator4', date: '2022-01-05', time: '12:16'},
        { id: 9, operatorId: 6, operatorName: 'operator2', date: '2022-01-17', time: '15:16'},
    ],
    trackings: [
        {id:  1, type: 'operator', position: ''},
        {id:  3, type: 'car', position: ''}
    ]
}