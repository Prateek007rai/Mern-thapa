const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://127.0.0.1/mern_thapa');

//make connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//Up and Running then print message
db.once('open',function(){
         console.log('Successfully Connected To MongoDb DataBase');
});

