const express = require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const instauserRouter = express.Router()
const InstaUsermodel = require("../Models/user.model")


instauserRouter.post("/singup", async (req, res) => {
     const { name, userName, email, password } = req.body;

     if (!name || !email || !userName || !password) {
          return res.status(422).json({ error: "Please add all the fields" })
     }

     try {
          let presentuser = await InstaUsermodel.findOne({ $or: [{ email }, { userName }] });
          if (presentuser) {
               res.status(422).send("user already exist with email or username")
          } else {

               bcrypt.hash(password, 4, async function (err, hash) {
                    const user = new InstaUsermodel({ email, password: hash, name, userName, })
                    await user.save();
                    res.status(200).send("Singup Succefully")

               });

          }


     }
     catch (err) {
          console.log(err)
          res.status(400).send("error in signup")
     }

})

instauserRouter.post("/login",async(req,res)=>{
     const { email, password } = req.body;
     if (!email || !password) {
          return res.status(422).json({ error: "Please add email and password" })
      }
      const presentuser=await InstaUsermodel.find({email});
      if(presentuser.length===0){
          res.status(422).send("wrong email")
      }
      const hash_password=presentuser[0].password;
      const{name,userName,_id}=presentuser[0]
    try{
     bcrypt.compare(password, hash_password, function(err, result) {
          if(result){
               const token= jwt.sign({ "userId":_id}, 'shh');
               if(token){
                   res.status(200).send({"mess":"longin succefull",token:token,user:{email,name,userName,_id}})
               }else{
                   res.status(422).send("error in getting token")
               }

           }else{
               res.status(422).send("password or username is wrong")
           }
     })
    }
    catch{
     console.log(err);
     res.status(400).send("error in login")
    }
})
module.exports = instauserRouter