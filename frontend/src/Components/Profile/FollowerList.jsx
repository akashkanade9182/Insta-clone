import React from 'react'
import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     useDisclosure,
     Button, Box,Avatar
   } from '@chakra-ui/react'
import Card from './Card'
import "./FollowerList.css"


 

 

const FollowerList = ({profile,textdata}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     
  return (
     <>
     <p style={{cursor:"pointer"}} onClick={onOpen}>
          {
          textdata==="followers" ?profile.followers.length:profile.following.length
          } {textdata}
          </p>
     <Modal isOpen={isOpen} size={'sm'} onClose={onClose}>
     <ModalOverlay />
     <ModalContent >
       <ModalHeader>{textdata}</ModalHeader>
       <ModalCloseButton />
       <ModalBody display={"flex"} flexDirection={["column", "column", "column", "column"]}>
         <Box display={"flex"} className="scrollBox"  boxShadow= "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" h="340px" flexDirection={"column"}   >
        <Box h="auto">
        {
            textdata==="followers" ? profile.followers.map((ele)=>(
              <Card key={ele} ele={ele}/>)): profile.following.map((ele)=>(
                <Card key={ele} ele={ele}/>))
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

export default FollowerList