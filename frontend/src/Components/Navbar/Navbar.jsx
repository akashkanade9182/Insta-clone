import React from 'react'
import { Box, useToast, Button } from "@chakra-ui/react"
import { NavLink, useNavigate } from "react-router-dom"
import {
     Menu,
     MenuButton,
     MenuList,
     MenuItem,
     MenuItemOption,
     MenuGroup,
     MenuOptionGroup,
     MenuDivider, IconButton
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogout } from '../../Redux/AuthReducer/action'


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
     const navigate = useNavigate()
     const isAuth=useSelector(store=>store.AuthReducer.isAuth)
     const dispatch=useDispatch()

const handleClick=()=>{
     dispatch(handleLogout)
}
     return (
          <Box w="100%" m="auto" p="5px 25px" boxShadow={"1px 5px 5px #e0dcdc"} display={"flex"} alignItems="center" justifyContent="space-between">
               <Box w="15%">
                    <NavLink to="/">
                         <img src="logo.png" style={{ width: "100%" }} alt="logo" />
                    </NavLink>
               </Box>


               <Box w="45%" display={["none", "none", "flex", "flex"]} justifyContent="space-between" alignItems={"center"}>
                    {
                         links.slice(1, 5).map((ele) => (
                              <NavLink key={ele.title} to={ele.path}>
                                   <li style={{ listStyle: "none" }}>{ele.title}</li>
                              </NavLink>
                         ))
                    }
                    <Button onClick={handleClick}  bgColor="#339ce3" color="white" visibility={isAuth?"visible":"hidden"} >Logout</Button>
               </Box>
               <Menu>
                    {/* <MenuButton
                 
                         as={IconButton}
                         aria-label='Options'
                         variant='outline'
                         display={["visible", "visible", "none", "none"]}
                    ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="4" y1="6" x2="20" y2="6" />
                              <line x1="4" y1="12" x2="20" y2="12" />
                              <line x1="4" y1="18" x2="20" y2="18" />
                         </svg></MenuButton>
                    <MenuList closeOnSelect={true}>
                    {
                         links.slice(1, 5).map((ele) => (
                              <NavLink key={ele.title} to={ele.path}>
                                   <li style={{ listStyle: "none",width:"90%",margin:"auto",marginTop:"10px",boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}}>{ele.title}</li>
                              </NavLink>
                         ))
                    }
                    <Button onClick={handleClick} w="90%" m="auto" h="35px" mt="10px" bgColor="#339ce3" color="white" visibility={isAuth?"visible":"hidden"} >Logout</Button>



                    </MenuList> */}
                                     {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button}  display={["visible","visible","none", "none",]}>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="4" y1="6" x2="20" y2="6" />
                              <line x1="4" y1="12" x2="20" y2="12" />
                              <line x1="4" y1="18" x2="20" y2="18" />
                         </svg>
      </MenuButton>
      <MenuList>
      {
                         links.slice(1, 5).map((ele) => (
                              <NavLink key={ele.title} to={ele.path}>
                                   <MenuItem w="90%" m="auto" mt="10px">
                                 {ele.title}

                                   </MenuItem>
                              </NavLink>
                         ))
                    }
                    <MenuItem>
                    <Button onClick={handleClick} w="90%" m="auto" h="35px" mt="10px" bgColor="#339ce3" color="white" visibility={isAuth?"visible":"hidden"} >Logout</Button>

                    </MenuItem>


      </MenuList>
    </>
  )}
   
               </Menu>


          </Box>
     )
}

export default Navbar