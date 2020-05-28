
const mongoose = require('mongoose');
 

module.exports = mongoose.model('student', {name: String, age: Number});