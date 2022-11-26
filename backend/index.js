require("dotenv").config()
const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
const cors = require("cors")
app.use(cors())

/*=================================
        Database
===================================*/
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://" + process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err)
})

app.use('/user', require('./routes/User.js'));
app.use('/user', require('./routes/newOrder.js'));
app.use('/user', require('./routes/newStats.js'));


/*============================
       listen process.env.PORT ||
=============================*/

app.listen(process.env.PORT);