import React, { useState, useEffect } from "react";
import "../Styles/CreatePost.css";
// import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
     const [body, setBody] = useState("");
     const [image, setImage] = useState("")
     const [url, setUrl] = useState("")
     const navigate = useNavigate()

     const loadfile = (event) => {
          var output = document.getElementById("output");
          output.src = URL.createObjectURL(event.target.files[0]);
          output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
          };
        };

     return (
          <div className="createPost">
               {/* //header */}
               <div className="post-header">
                    <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
                    <button id="post-btn" >Share</button>
               </div>
               {/* image preview */}
               <div className="main-div">
                    <img
                         id="output"
                         src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
                         alt="error"
                    />
                    <input
                    style={{padding:"10px 10px"}}
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