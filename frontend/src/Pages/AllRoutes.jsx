import React from 'react'
import { Routes, Route } from "react-router-dom"
import CreatePost from './CreatePost'
import Homepage from './Homepage'
import PrivateRoute from './PrivateRoute'
import Profile from './Profile'
import Signin from './Signin'
import Signup from './Signup'

const AllRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<PrivateRoute><Homepage /></PrivateRoute>} />
               <Route path="/signin" element={<Signin />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
               <Route path="/createPost" element={ <PrivateRoute><CreatePost/></PrivateRoute>} />
          </Routes>

     )
}

export default AllRoutes