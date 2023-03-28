const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const userSchema=mongoose.Schema({
     name: {
          type: String,
          required: true
      },
      userName: {
          type: String,
          required: true
      },
      email: {
          type: String,
          required: true
      },
      password: {
          type: String,
          required: true
      },
      photo: {
          type: String,
          
      },
    
      followers: [{ type: ObjectId, ref: "instausers" }],
      following: [{ type: ObjectId, ref: "instausers" }]
 })

 const InstaUsermodel=mongoose.model("instausers",userSchema);
 module.exports=InstaUsermodel;