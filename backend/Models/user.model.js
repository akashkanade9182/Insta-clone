const mongoose = require("mongoose");

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
     //  Photo: {
     //      type: String,
     //  },
     //  followers: [{ type: ObjectId, ref: "USER" }],
     //  following: [{ type: ObjectId, ref: "USER" }]
 })

 const InstaUsermodel=mongoose.model("instausers",userSchema);
 module.exports=InstaUsermodel;