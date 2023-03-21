import React from 'react'
import { Routes, Route } from "react-router-dom"
import CreatePost from './CreatePost'
import Homepage from './Homepage'
import Profile from './Profile'
import Signin from './Signin'
import Signup from './Signup'

const AllRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<Homepage />} />
               <Route path="/signin" element={<Signin />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/createPost" element={<CreatePost/>} />
          </Routes>

     )
}

export default AllRoutes