import * as types from "./actionTypes"
import axios from "axios"
import { useNavigate } from 'react-router-dom';





// const getLogin=(payload)=>(dispatch)=>{
//      dispatch({type:types.LOGIN_REQUEST})

//     return ( axios.post("http://localhost:7000/instauser/login",payload).then((r)=>{
//      if(r.data.token){
//        dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
//        alert("Signin successfull")
        
//      }else{
//         alert("wrong password or email")
//      }
//         // console.log(r.data.token)
//     }).catch((e)=>{
//         console.log(e)
//         alert("wrong password or email")
//     }))
// }


const getLogin=(payload,toast,navigate,location)=>(dispatch)=>{
  dispatch({type:types.LOGIN_REQUEST})

 return axios.post("http://localhost:7000/instauser/login",payload).then((r)=>{
  if(r.data.token){
    dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
    toast({
     position: 'top-center',
     render: () => (
       <div style={{backgroundColor:" #272150",borderRadius:"9px" ,display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px",padding:"10px 10px" ,height:"50px",color:"white"}}>
         Login successfull
       </div>
     ),
   })
   if(location?.state?.from){
    navigate(location.state.from)
   }else{
    navigate("/")
   }
   
     
  }
  else{

  }
     // console.log(r.data.token)
 }).catch((e)=>{
     console.log(e)
     toast({
       position: 'top-center',
       render: () => (
         <div style={{backgroundColor:" red" ,color:"white"}}>
          Error in login successfull
         </div>
       ),
     })
 })
}

export {getLogin};