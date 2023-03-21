import React, { useState, useEffect } from 'react'
import "../Styles/Profile.css"




const Profile = () => {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("")
  const [changePic, setChangePic] = useState(false)


  return (
    <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        <img

          src={picLink}
          alt=""
        />
      </div>
      {/* profile-data */}
      <div className="pofile-data">
        <h1>{"akash kanade"}</h1>
        <div className="profile-info" style={{ display: "flex", width: "90%", justifyContent: "space-around", margin: "auto" }}>
          <p>{"0"} posts</p>
          <p>{"0"} followers</p>
          <p>{"0"} following</p>
        </div>
      </div>
      <hr
        style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      {/* Gallery */}
      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

      </div>
    </div>
  )
}

export default Profile