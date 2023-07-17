 const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema({
      "number" : { type : Number , required : true },
      "booked_status" : {type : Boolean , required : true}
},{
     timestamps : true,
     versionKey : false
}) 

module.exports = mongoose.model("Seat", SeatSchema );