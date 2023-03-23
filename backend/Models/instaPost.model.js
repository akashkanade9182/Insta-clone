const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types
const InstaUsermodel=require("../Models/user.model")


const instapostSchema=mongoose.Schema({
     body: {
          type: String,
          required: true
      },
      photo: {
          type: String,
          require: true
      },
      likes: [{ type: ObjectId, ref: "instausers" }],
      comments: [{
          comment: { type: String },
          postedBy: { type: ObjectId, ref: "instausers" }
      }],
      postedBy: {
          type: ObjectId,
          ref: "instausers"
      }
  }, { timestamps: true })

 const InstaPostmodel=mongoose.model("instapost",instapostSchema);
 module.exports=InstaPostmodel;