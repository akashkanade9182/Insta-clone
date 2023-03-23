import React, { useState, useEffect } from "react";
import "../Styles/CreatePost.css";
// import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useToast } from '@chakra-ui/react'



const postCloude = (payload) => {
  return axios.post("https://api.cloudinary.com/v1_1/instacloude1995/image/upload", payload)
}

const postMongo = (payload, token) => {
  const options = {
    url: 'http://localhost:7000/instapost/createpost',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
    data: JSON.stringify(payload)
  };

  return axios(options)

}

const CreatePost = () => {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const token = useSelector(store => store.AuthReducer.token)
  const toast = useToast();

  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  //imgae posting to cloud
  const postDetails = () => {
    let data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "insta-clone")
    data.append("cloud_name", "instacloude1995")
    postCloude(data).then((r) => {
      setUrl(r.data.url)
      console.log(r.data.url)
    }).catch((e) => {
      console.log(e)
    })

 
 

  }
  // const handleCheck=()=>{
  //   if (url) {
 
  //     postMongo({body,pic:url},token).then((r)=>{
  //      console.log("mongoupload success",r.data)
  //     }).catch((e)=>{
  //      console.log("mongo upload failer",e)
  //     })
  //    }
  
  // }

  useEffect(() => {
    if (url) {
 
     postMongo({body,pic:url},token).then((r)=>{
      toast({
        position: 'top-center',
        render: () => (
          <div style={{backgroundColor:" #272150",borderRadius:"9px" ,display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px",padding:"10px 10px" ,height:"50px",color:"white"}}>
         new Post added successfully
          </div>
        ),
      })
      navigate("/")
      console.log("mongoupload success",r.data)
     }).catch((e)=>{
      toast({
        position: 'top-center',
        render: () => (
          <div style={{backgroundColor:" red" ,color:"white"}}>
           file upload failed
          </div>
        ),
      })
      console.log("mongo upload failer",e)
     })
    }


  }, [url])
  return (
    <div className="createPost">
      {/* //header */}
      <div className="post-header">
        <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
        <button id="post-btn" onClick={postDetails} >Share</button>
      </div>
      {/* image preview */}
      <div className="main-div">
        <img
          id="output"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
          alt="error"
        />
        <input
          style={{ padding: "10px 10px" }}
          type="file"
          accept="image/*"
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0])
          }}
        />
      </div>
      {/* details */}
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h5>Ramesh</h5>
        </div>
        <textarea value={body} onChange={(e) => {
          setBody(e.target.value)
        }} type="text" placeholder="Write a caption...."></textarea>
      </div>
    </div>
  )
}

export default CreatePost