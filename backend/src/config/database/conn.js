const mongoose = require('mongoose');

const url = 'mongodb://localhost/ecolaranchieta';

mongoose.connect(url, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,  
    useFindAndModify: false 
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
