const mongoose = require('mongoose');
require('./config/database.config')

let Student = require('./models/Students.model')


Student.find({name: 'Manish'}, {age: 1})
   .then((res) => {
       console.log('Files are', res)
   })

Student.findById('5ecfa8b01745312edcf56605')
    .then((res) => {
        console.log('That file is', res)
    })