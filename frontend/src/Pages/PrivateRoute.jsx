import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom';
import {sessionLogin} from "../Redux/AuthReducer/action.js"

const PrivateRoute = ({children}) => {
  const dispatch=useDispatch()
     const isAuth=useSelector(store=>store.AuthReducer.isAuth);
 let data=JSON.parse(sessionStorage.getItem('user'));
 let token=sessionStorage.getItem('token');
    //  if(!isAuth){
    //    return  <Navigate to ="/signin" />
    //  }
    //  return children;
    if(!isAuth && token){
      dispatch(sessionLogin({user:data,token}))
      return children
    }
    else if(isAuth){
      return children
    }
    else{
      return  <Navigate to ="/signin" />
    }
    

  
}

export default PrivateRoute