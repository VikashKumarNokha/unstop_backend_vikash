const router = require("express").Router()

const  seats = require("../models/seat.model") 

router.get("/", async (req, res)=>{
    try{
        const data = await seats.find();   
       return res.status(200).json(data);
    }catch(err){
         console.log("err", err);
    }
})


router.post("/", async (req, res)=>{
    const newseat = new seats(req.body);
     try{ 
       const savedata = await newseat.save();
       return res.status(200).json(savedata);
        
     }catch(err){
         console.log("err", err);
     }
})

router.patch("/", async (req, res)=>{
          const updatingData  = req.body.number 
          const updatingType =  req.body.booked_status

       try{
        const updetedseats = await seats.updateMany( { number : {$in: updatingData } },
            {
              $set: { booked_status : updatingType } ,
            },
            { new: true } ) 
            
            return res.status(200).send(updatingData);  

       }catch(err){
          console.log("eerr", err);
       }
})



module.exports = router