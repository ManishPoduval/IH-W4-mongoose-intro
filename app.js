const mongoose = require('mongoose');

require('./config/database.config')

let Student = require('./models/Students.model')

// Student.create({name: 'Manish'});
// Student.create({name: 'Jorge', age: 23});

Student.insertMany([{name: 'Manish'}, {name: 'Manish1'}])
     .then((res) => {
         console.log('Data added', res)
     })