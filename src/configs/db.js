
const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config()

 const connect = ()=>{
     return mongoose.connect("mongodb+srv://vikashkumarnokha:daNiyODuFs7c1A8E@testprojectdb.9yk9mod.mongodb.net/?retryWrites=true&w=majority");
}


module.exports = connect;