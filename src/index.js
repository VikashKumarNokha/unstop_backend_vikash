 const express = require("express")
 const cors = require("cors");

 const app = express();
 require('dotenv').config()

 app.use(express.json())

 app.use(cors());

 const connect = require("./configs/db")

 const Seatcontroller = require("./controllers/seat.controller") 


 app.get("/", async (req, res)=>{
      try{

         return await res.status(200).json("Welcome to Unstop server");
      }catch(err){
         console.log("err", err);
      }
 })


 app.use("/seats", Seatcontroller);

 const port=process.env.PORT || 5000

 app.listen(port, async ()=>{
      try{
         await connect();
          console.log(`listening server on port ${port}`)
      }catch(err){
         console.log("server", err);
      }
 })