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
        {id:1 , name: 'dhaka', country: 'Bangladesh'},
        {id:2 , name: 'gazipur', country: 'Bangladesh'},
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