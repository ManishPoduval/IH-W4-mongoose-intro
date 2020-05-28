
const mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    age: {
        type: Number, 
        min: 18,
        max: 62,
    },
    address: {
        type: String,
        enum: ['France', 'Germany', 'Italy'],
    }
})
 

module.exports = mongoose.model('student', StudentSchema);