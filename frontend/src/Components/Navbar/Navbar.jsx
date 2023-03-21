import React from 'react'
import { Box,useToast,Button } from "@chakra-ui/react"
import { NavLink, useNavigate } from "react-router-dom"



const links = [
     {
          title: "Homepage",
          path: "/"
     },
     {
          title: "Signup",
          path: "signup"
     },
     {
          title: "Signin",
          path: "signin"
     },
     {
          title: "Profile",
          path: "profile"
     },
     {
          title: "Create Post",
          path: "/createPost"
     },
]
const Navbar = () => {
     const navigate=useNavigate()
     return (
          <Box w="100%" m="auto" boxShadow={"1px 5px 5px #e0dcdc"} display={"flex"} alignItems="center" justifyContent="space-around">
               <Box w="15%">
               <NavLink to="/">
               <img src="logo.png" style={{ width: "100%" }} alt="logo" />
               </NavLink>
               </Box>
             
              
               <Box w="45%" display={"flex"} justifyContent="space-around">
                    {
                         links.slice(1,5).map((ele)=>(
                              <NavLink key={ele.title} to={ele.path}>
                                   <li style={{listStyle:"none"}}>{ele.title}</li>
                              </NavLink>
                         ))
                    }
                    {/* <Button onClick={()=>navigate("/createPost")}>Create Post</Button> */}
               </Box>

          </Box>
     )
}

export default Navbar