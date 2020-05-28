const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Yayyy Database is connected');
    })
    .catch(() => {
        console.log('Something went wrong!');
    })