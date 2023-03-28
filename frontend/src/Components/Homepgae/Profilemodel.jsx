import React ,{useEffect,useState}from 'react'
import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     useDisclosure,
     Button, Box,Avatar,
   } from '@chakra-ui/react'
import axios from 'axios'


const getUserPost=(id)=>{
     return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/instapost/getuserpost/${id}`)
}


const Profilemodel = ({profile}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [userPost,setUserpost]=useState([])
     
     var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"

const handleClick=()=>{
     getUserPost(profile._id).then((r)=>{
          setUserpost(r.data.posts)
          console.log(r.data.posts)
     }).catch((e)=>{
          console.log({mess:"error in getting post of user",e})
     })
     console.log(profile._id)
     onOpen()

}



  return (
     <>
        <Avatar cursor="pointer" onClick={handleClick} name='Ryan Florence' src={profile.photo ? profile.photo : picLink} />

     <Modal isOpen={isOpen} size={[ "sm","sm","2xl","2xl"]} onClose={onClose}>
     <ModalOverlay />
     <ModalContent >
       <ModalHeader>profile</ModalHeader>
       <ModalCloseButton />
       <ModalBody display={"flex"} flexDirection={["column", "column", "column", "column"]}>
         <Box display={"flex"} w={[  "auto","auto","600px","600px"]} className="scrollBox"  border="1px solid black" h="auot" flexDirection={"column"}   >
         <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* <img

          style={{ cursor: "pointer",maxWidth:"160px",objectFit:"contain",borderRadius:"50%" }} onClick={onOpen}
          src={picLink}
          alt=""
        /> */}
        <Avatar size='2xl' cursor= "pointer" onClick={onOpen} name={profile.name} src={profile.photo ? profile.photo : picLink} />
       
      </div>
      {/* profile-data */}
      <div className="pofile-data" >
        <h1 style={{textAlign:"center",fontSize:"20px"}}>{profile.name&&profile.name}</h1>
        <div className="profile-info" style={{ display: "flex", width: "90%", justifyContent: "space-around", margin: "auto" }}>
          <p>{userPost?userPost.length:0} posts</p>
          <p>{profile.followers?profile.followers.length:0} followers</p>
          <p>{profile.following?profile.following.length:0} following</p>

        </div>
      </div>
      <hr
        style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      {/* Gallery */}
      <div className="gallery">
       {
        userPost && userPost.length>0 && userPost.map((ele)=>(
          <img src={ele.photo} alt="err" />
        ))
       }
      </div>
    </div>
        
          
         </Box>
         

       </ModalBody>

       <ModalFooter>
        
       </ModalFooter>
     </ModalContent>
   </Modal>
     </>
  )
}

export default Profilemodel