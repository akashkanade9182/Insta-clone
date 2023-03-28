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
import CommentCard from './CommentCard'


const getSinglePost=(id)=>{
     return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/instapost/getsinglepost/${id}`)
}

const Commentmodel = ({Id,comments}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [post,setPost]=useState({})
     
     var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"

const handleClick=()=>{
     // getSinglePost(Id).then((r)=>{
     //      setPost(r.data)
     //      console.log(r.data)
     // }).catch((e)=>{
     //      console.log({mess:"error in getting post ",e})
     // })
     console.log("c",comments)
   
     onOpen()

}



  return (
     <>
        <span style={{ textAlign: "left", cursor: "pointer" }} onClick={handleClick}>View all commments</span>

     <Modal isOpen={isOpen} size={[ "sm","sm","sm","sm"]} onClose={onClose}>
     <ModalOverlay />
     <ModalContent >
       <ModalHeader>Comments</ModalHeader>
       <ModalCloseButton />
       <ModalBody display={"flex"} flexDirection={["column", "column", "column", "column"]} h="500px">
         <Box display={"flex"}  boxShadow= "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" w={[  "auto","auto","auto","auto"]} p="10px 10px" className="scrollBox"   h="300px"   flexDirection={"column"}   >
       <Box w="100%" h="auto"   >
       {
          comments.length>0 ? comments.map((ele,index)=>(
               <CommentCard key={index} {...ele}/>
          )):<h1>No comments</h1>

         }
       </Box>
       
   
        
          
         </Box>
         

       </ModalBody>

       <ModalFooter>
        
       </ModalFooter>
     </ModalContent>
   </Modal>
     </>
  )
}

export default Commentmodel