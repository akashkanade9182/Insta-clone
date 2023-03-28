const express = require("express")

const instapostRoute = express.Router();
const InstaPostmodel = require("../Models/instaPost.model")
const Authentication = require("../Middleware/Authentication");
const { findById } = require("../Models/instaPost.model");
const InstaUsermodel = require("../Models/user.model")



instapostRoute.get("/allpost", async (req, res) => {
    try {
        let post = await InstaPostmodel.find();
        res.status(200).send({ posts: post.reverse() })
    }
    catch {
        res.status(400).send("error in getting posts")
    }
})

/***************get single post***************** */

instapostRoute.get("/getsinglepost/:id", async (req, res) => {
    const Id=req.params.id
    try {
        let post = await InstaPostmodel.findById({_id:Id});
        res.status(200).send(post)
    }
    catch {
        res.status(400).send("error in getting posts")
    }
})

instapostRoute.get("/getuserpost/:id", async (req, res) => {
    const Id = req.params.id
    console.log(Id)
    try {
        let post = await InstaPostmodel.find({ postedBy: Id });
        res.status(200).send({ posts: post.reverse() })
    }
    catch {
        res.status(400).send("error in getting user posts")
    }
})


instapostRoute.use(Authentication)
instapostRoute.get("/getownpost", async (req, res) => {
    const { user } = req.body;

    try {
        let post = await InstaPostmodel.find({ postedBy: user });
        res.status(200).send({ posts: post })
    }
    catch {
        res.status(400).send("error in getting of own posts")
    }
})


/******************Post creating**************** */
instapostRoute.post("/createpost", async (req, res) => {
    const { body, pic, user } = req.body;
    if (!body || !pic) {
        res.status(422).json({ error: "Please add all the fields" })
    }
    const author = await InstaUsermodel.findById({ _id: user })
    console.log(author)
    if (!author) {
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


/**************LIkes update************ */

instapostRoute.patch("/likes/:id", async (req, res) => {
    const { user } = req.body;
    const Id = req.params.id;
    console.log(user)

    InstaPostmodel.findByIdAndUpdate({ _id: Id }, {
        $push: { likes: user }
    }, {
        new: true
    }).then(() => {
        res.status(200).send("like successfully")
    })
        .catch(() => {
            res.status(400).send("error in likes request")
        })

})


/****************Comment update************* */

instapostRoute.patch("/comment/:id", async (req, res) => {
    const { user, comment } = req.body
    const Id = req.params.id
    const payload = {
        comment, postedBy: user
    }

    InstaPostmodel.findByIdAndUpdate({ _id: Id }, {
        $push: { comments: payload }
    }, {
        new: true
    }).then((r) => {
        res.status(200).send("comment added succefully")
    }).catch((e) => {
        res.status(400).send("error in comment added")

        console.log(e)
    })



})



module.exports = instapostRoute