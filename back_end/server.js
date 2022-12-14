const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Travel = require('./models/travel.js');
const app = express();

//creates rect.body off of url encoded data
app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors()); //allow everyone to access your data


// =======================================
const appRouter = require("./controllers/routes.js");

app.use("/travel", appRouter);

//drop database comment
// mongoose.connection.dropDatabase();

//=================================================
// connections
mongoose.connect('mongodb://localhost:27017/travelcrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

app.listen(3000, ()=>{
    console.log('travel listening...');
});
