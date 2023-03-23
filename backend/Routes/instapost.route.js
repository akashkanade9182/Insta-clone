const express = require("express")

const instapostRoute=express.Router();
const InstaPostmodel=require("../Models/instaPost.model")
const Authentication=require("../Middleware/Authentication");
const { findById } = require("../Models/instaPost.model");
const InstaUsermodel=require("../Models/user.model")



instapostRoute.get("/allpost",async(req,res)=>{
try{
    let post =await InstaPostmodel.find();
  res.status(200).send({posts:post})
}
catch{
    res.status(400).send("error in getting posts")
}
})
instapostRoute.use(Authentication)
instapostRoute.post("/createpost",async(req,res)=>{
     const { body, pic ,user} = req.body;
     if (!body || !pic) {
          res.status(422).json({ error: "Please add all the fields" })
      }
      const author=await InstaUsermodel.findById({_id:user})
      console.log(author)
      if(!author){
          res.status(422).json({ error: "author is not found for save " })
      }
      const post = new InstaPostmodel({
          body,
          photo: pic,
          postedBy: author
      })
      post.save().then((result) => {
          return res.json({ post: result })
      }).catch(err => console.log(err))
  
})

module.exports=instapostRoute