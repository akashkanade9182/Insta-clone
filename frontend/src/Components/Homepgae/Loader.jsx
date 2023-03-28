import React from 'react'
import {Box,Skeleton,SkeletonCircle,SkeletonText} from "@chakra-ui/react"
import "./Card.css"
const Loader = () => {
  return (
     <Box className='card' padding='6' boxShadow='lg' bg='white'>
     <SkeletonCircle size='10' />
     <Skeleton height='300px' width={"80%"} margin="auto"/>
     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
   </Box>
  )
}

export default Loader