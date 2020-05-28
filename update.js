const mongoose = require('mongoose');
require('./config/database.config')

//-------DO THIS NOW ----------

//Create data.js . Export an array
// Require it here
// Insert into the db with the insertMany command

//-----------------------------

//JUSTOOO CAN YOU HEAR ME ? NO WORRIES

let Student = require('./models/Students.model')

Student.deleteOne({name: 'Jorge'})
    .then((res) => {
        console.log('Deleted data response', res)
    })

// Student.updateOne({name: 'Jorge'}, {$set: {age: 25}})
//     .then((res) => {
//         console.log('Updated data is', res)
//     })

// Student.updateMany({name: 'Manish'}, {$set: {name: 'Hey'}})    
//     .then((res) => {
//         console.log('Updated datas are', res)
//     })