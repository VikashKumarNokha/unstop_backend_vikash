 const express = require("express")
 const cors = require("cors");

 const app = express();

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



 app.listen(5000, async ()=>{
      try{
         await connect();
          console.log("listening server on port 5000")
      }catch(err){
         console.log("server", err);
      }
 })