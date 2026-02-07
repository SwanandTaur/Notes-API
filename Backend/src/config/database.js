
// database.js

const mongoose = require("mongoose")
require("dotenv").config()

const connectToDb =()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connected Successfully");
    })
}

module.exports = connectToDb;