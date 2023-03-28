const jwt = require("jsonwebtoken")




const Authentication = (req,res,next) => {

     const { authorization } = req.headers;
     if (!authorization) {
          return res.status(401).json({ error: "You must have logged in 1" })
      }
     const token=req.headers?.authorization?.split(" ")[1]
     

     if(token){
         let decoded = jwt.verify(token, 'shh');
          if(decoded){
            
              const userId = decoded.userId
              req.body.user = userId;
            
              next()
          }
          else{
             res.status(401).json({ error: "You must have logged in 2" })
          }  
  
       }else{
          res.status(401).send("please login")
       }
      //  res.status(400).send("middlware checking")
}

module.exports= Authentication;