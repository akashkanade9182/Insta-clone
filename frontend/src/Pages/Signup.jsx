import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom"
import "../Styles/Singup.css"
import axios from "axios"
import { useToast } from '@chakra-ui/react'

const postData=(payload)=>{
     return axios.post("https://rich-erin-sturgeon-suit.cyclic.app/instauser/singup",payload)
}

const Signup = () => {
     const navigate = useNavigate()
     const [name, setName] = useState("");
     const [email, setEmail] = useState("")
     const [userName, setUserName] = useState("")
     const [password, setPassword] = useState("");
     const toast = useToast({
          position: 'top',
         
          containerStyle: {
            width: '800px',
            maxWidth: '100%',
          },
        })
     


const handleClick=()=>{
     let data={name,email,password,userName};
     postData(data).then((r)=>{
          toast({
               title: `${r.data}`,
               containerStyle: {
                 borderRadius:"10px",
                 bgColor:"#57cc99"
               },
             })
          console.log(r.data)
     }).catch((e)=>{
          toast({
               title: `${e}`,
               containerStyle: {
                 borderRadius:"10px",
               },
             })
          
     })

}




  return (
     <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img className="signUpLogo" src={"logo.png"} alt="" />
          <p className="loginPara">
            Sign up to see photos and videos <br /> from your friends
          </p>
          <div>
            <input type="email" style={{padding:"0 10px"}}  name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input type="text"  style={{marginTop:"15px",padding:"0 10px"}} name="name" id="name" placeholder="Full Name" value={name} onChange={((e) => { setName(e.target.value) })} />
          </div>
          <div>
            <input
              type="text"
              name="username"
              style={{marginTop:"15px",padding:"0 10px"}}
              id="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => { setUserName(e.target.value) }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              style={{marginTop:"15px",padding:"0 10px"}}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up"  onClick={ handleClick} />
        </div>
        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup