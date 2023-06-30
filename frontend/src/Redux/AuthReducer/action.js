import * as types from "./actionTypes"
import axios from "axios"
import { useNavigate } from 'react-router-dom';





// const getLogin=(payload)=>(dispatch)=>{
//      dispatch({type:types.LOGIN_REQUEST})

//     return ( axios.post("https://rich-erin-sturgeon-suit.cyclic.app/instauser/login",payload).then((r)=>{
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

 return axios.post("https://rich-erin-sturgeon-suit.cyclic.app/instauser/login",payload).then((r)=>{
  if(r.data.token){
    dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
    sessionStorage.setItem('token', `${r.data.token}`);
    sessionStorage.setItem('user', JSON.stringify(r.data.user));

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

const getSingleUser=(token)=>(dispatch)=>{
  dispatch({type:types.GET_PROFILE_REQUEST})
  const options = {
    url: 'https://rich-erin-sturgeon-suit.cyclic.app/instauser/getsingleuser',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
  
  };



  return axios(options).then((r)=>{
    dispatch({type:types.GET_PROFILE_SUCCESS,payload:r.data})
    console.log(r.data)
   }).catch((e)=>{
    console.log(e)
    dispatch({type:types.GET_PROFILE_FAILURE})
   })
}

/******update profil picture**************** */
const updateProfilepic=(Id,payload)=>(dispatch)=>{
  dispatch({type:types.UPDATE_PROFILE_REQUEST})
  return axios.patch(`https://rich-erin-sturgeon-suit.cyclic.app/instauser/updateprofile/${Id}`,payload).then((r)=>{
    dispatch({type:types.UPDATE_PROFILE_SUCCESS,payload:r.data})
    console.log(r.data)
    console.log("update successful")
   }).catch((e)=>{
    console.log(e)
    dispatch({type:types.UPDATE_PROFILE_FAILURE})
   })


  }

  const handleLogout=(dispatch)=>{
    dispatch({type:types.LOGOUT_SUCCESS})
    }
    
  const sessionLogin=(data)=>(dispatch)=>{
    dispatch({type:types.LOGIN_SUCCESS,payload:data})

  }
 


  

export {getLogin,sessionLogin,getSingleUser,updateProfilepic,handleLogout};