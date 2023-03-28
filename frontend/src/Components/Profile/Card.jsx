import React, { useState, useEffect } from 'react'
import {
  Box, Avatar
} from '@chakra-ui/react'
import axios from 'axios'

const getUser = (id) => {
  return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/instauser/getusercard/${id}`)
}

const Card = ({ ele }) => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    console.log(ele)
    getUser(ele).then((r) => {
      setProfile(r.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [ele])
  return (
    <>
      <Box w="95%" m="auto" mt="10px" p="15px 15px" boxShadow= "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" borderRadius={"10px"} h="60px" display="flex" alignItems={"center"} >
        <Avatar name={profile.name} src={profile.photo !== "no photo" && profile.photo} />
        <h5 style={{ marginLeft: "10px" }}>{profile.name && profile.name}</h5>
      </Box>

    </>
  )
}
export default Card