const mongoose = require('mongoose');
require('./config/database.config')

let Student = require('./models/Students.model')



Student.updateOne({name: 'Jorge'}, {$set: {age: 25}})
    .then((res) => {
        console.log('Updated data is', res)
    })

Student.updateMany({name: 'Manish'}, {$set: {name: 'Hey'}})    
    .then((res) => {
        console.log('Updated datas are', res)
    })