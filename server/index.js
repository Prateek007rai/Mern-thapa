const express = require('express');
const dotenv = require('dotenv');
const app = express();
const db = require('./config/mongoose');

dotenv.config({path:'./config.env'});
const Port = process.env.PORT;


app.get('/', (req, res) => {
    res.send( `Hello world from the server`);
})

app.listen(Port, (err)=>{
    if(err){console.log("Error occured !!!");}

    console.log("Server is running on port no: ", Port);
})