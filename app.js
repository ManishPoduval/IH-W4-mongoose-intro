const mongoose = require('mongoose');

require('./config/database.config')

 let data = require('./data.js')

let Student = require('./models/Students.model')

// Student.create({name: 'Manish'});

Student.create({name: 'Giovanni', address: 'france'});

Student.insertMany(data)
     .then((res) => {
         console.log('Data added', res)
     })