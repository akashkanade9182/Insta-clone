const express=require("express")
const cors = require("cors")

const connection=require("./Config/db")
const instauserRouter=require("./Routes/user.route")


const app=express();
app.use(express.json());
app.use(cors({
     origin : "*"
 }))

 app.use("/instauser",instauserRouter)


 app.listen(7000,async()=>{
     try{
     await connection;
     console.log("server running on port 7000")
     
     }
     catch{
        console.log("error in server connection")
     }
    })