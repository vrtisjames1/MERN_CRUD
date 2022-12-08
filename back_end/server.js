const express = require('express');

const app = express();

// //creates rect.body off of url encoded data
// app.use(express.json()); //use .json(), not .urlencoded()
// app.use(cors()); //allow everyone to access your data


// =======================================
// const appRouter = require("./controllers/routes.js");

// app.use("/shelter", appRouter);

//=================================================
// connections
// mongoose.connect('mongodb://localhost:27017/sheltercrud')
// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongod...');
// });

app.get('/', (req, res)=>{
        res.send('hello world'); 
    });


app.listen(3000, ()=>{
    console.log('shelters listening...');
});

