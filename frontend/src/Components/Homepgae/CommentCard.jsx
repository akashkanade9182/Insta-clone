import { Box, Avatar } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getUser = (id) => {
     return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/instauser/getusercard/${id}`)
}


const CommentCard = ({ postedBy, comment }) => {
     const [profile, setProfile] = useState({})

     useEffect(() => {
          getUser(postedBy).then((r) => {
            setProfile(r.data)
          }).catch((e) => {
            console.log(e)
          })
        }, [postedBy])
     return (
          <Box w="95%" m="auto" mt="10px" p="15px 15px" boxShadow= "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" borderRadius={"10px"} h="60px" display="flex" alignItems={"center"} >
          <Avatar name={profile.name} src={profile.photo !== "no photo" && profile.photo} />
               <Box p="5px 5px">
                    {
                         <h1><span style={{fontWeight:"bold"}}>{profile.name}:</span><span style={{marginLeft:"5px"}}>{comment}</span></h1>
                       
                    }
               </Box>

          </Box>
     )
}

export default CommentCard;