import React ,{useState,useEffect}from 'react'
import {useNavigate,Link} from "react-router-dom"
import "../Styles/Signin.css"
import { getLogin } from '../Redux/AuthReducer/action'
import {useDispatch,useSelector} from "react-redux"
import { useLocation} from 'react-router-dom';
import { useToast } from '@chakra-ui/react'



const Signin = () => {
     const navigate = useNavigate();
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const dispatch=useDispatch();
     const  location =useLocation();
     const toast = useToast()

     const isAuth=useSelector(store=>store.AuthReducer.isAuth);


const handleClick=()=>{
     let data={
          email,password
       }


       dispatch(getLogin(data,toast,navigate,location))

}


  return (
     <div className="signIn">
     <div>
       <div className="loginForm">
         <img className="signUpLogo" src={"logo.png"} alt="err" />
         <div>
           <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
         </div>
         <div>
           <input
             type="password"
             name="password"
             id="password"
             placeholder="Password"
             value={password}
             onChange={(e) => { setPassword(e.target.value) }}
           />
         </div>
         <input type="submit" id="login-btn" onClick={handleClick}  value="Sign In" />
       </div>
       <div className="loginForm2">
         Don't have an account ?
         <Link to="/signup">
           <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
         </Link>
       </div>
     </div>
   </div>
  )
}

export default Signin;
