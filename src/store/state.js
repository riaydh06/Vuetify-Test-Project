export default {
    cars: [
        {id: 1, name: 'car1', type: 'Hatchback'},
        {id: 2, name: 'car2', type: 'Sedan'},
        {id: 3, name: 'car3', type: 'Sports car'},
    ],
    users: [
        {id: 1, type: 'manager', name: 'manager', email: 'email@gmail.com', password: '123456'},
        {id: 1, type: 'operator', name: 'operator', email: 'email2@gmail.com', password: '123456'}
    ],
    cities: [
        {id:1 , name: 'dhaka', country: 'bangladesh'},
        {id:2 , name: 'gazipur', country: 'bangladesh'},
    ],
    reports: [
        { id: 1, operatorId: 1, operatorName: 'operator1', date: 'operator1', time: '123456'},
        { id: 2, operatorId: 1, operatorName: 'operator1', date: 'operator2', time: '123456'},
        { id: 3, operatorId: 1, operatorName: 'operator1', date: 'operator3', time: '123456'},
        { id: 4, operatorId: 1, operatorName: 'operator1', date: 'operator4', time: '123456'},
        { id: 5, operatorId: 1, operatorName: 'operator1', date: 'operator5', time: '123456'},
        { id: 6, operatorId: 1, operatorName: 'operator1', date: 'operator6', time: '123456'},
    ],
    trackings: [
        {id:  1, type: 'operator', position: ''},
        {id:  3, type: 'car', position: ''}
    ]
}