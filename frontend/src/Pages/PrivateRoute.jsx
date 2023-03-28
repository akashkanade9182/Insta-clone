import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
     const isAuth=useSelector(store=>store.AuthReducer.isAuth);
 
     if(!isAuth){
       return  <Navigate to ="/signin" />
     }
     return children;
    

  
}

export default PrivateRoute