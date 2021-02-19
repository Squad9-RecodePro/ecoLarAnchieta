const mongoose = require('mongoose');

const url = process.env.DB_KEY;

mongoose.connect(url, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,  
    useFindAndModify: false 
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
