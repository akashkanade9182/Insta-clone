import React, { useState, useEffect } from 'react'
import "../Styles/Profile.css"
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
import { uploadProfilepic,getOwnPost } from '../Redux/AppReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser,updateProfilepic } from '../Redux/AuthReducer/action'
import FollowerList from '../Components/Profile/FollowerList'


const Profile = () => {
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("")
  const [changePic, setChangePic] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [profilepic, setProfilepic] = useState("")
  const [url, setUrl] = useState()
  const isLoading = useSelector(store => store.AppReducer.isLoading)
  const isError = useSelector(store => store.AppReducer.isError)
  const data=useSelector(store => store.AppReducer.data)
  const token=useSelector(store => store.AuthReducer.token)
  const profile=useSelector(store=>store.AuthReducer.data);
  const dispatch = useDispatch()
  
// let picLink = profile.photo==="no photo"? "https://cdn-icons-png.flaticon.com/128/3177/3177440.png":profile.photo
let picLink = profile.photo?profile.photo: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"


  const loadfile = (event) => {
    var output = document.getElementById("profileimage");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  const handleUpload = () => {
    let data = new FormData()
    data.append("file", profilepic)
    data.append("upload_preset", "insta-clone")
    data.append("cloud_name", "instacloude1995")
    dispatch(uploadProfilepic(data, setUrl)).then(()=>{
    
      console.log("file upload successfull")
    }).catch(e=>console.log(e))
  }

  const handleUpdate=()=>{
    console.log(url)
    dispatch(updateProfilepic(profile._id,{photo:url})).then(()=>{
      onClose()
    })
  }
useEffect(()=>{
dispatch(getOwnPost(token))
dispatch(getSingleUser(token))
},[token,])
useEffect(()=>{
  dispatch(getSingleUser(token))
  },[token])




  return (
    <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* <img

          style={{ cursor: "pointer",maxWidth:"160px",objectFit:"contain",borderRadius:"50%" }} onClick={onOpen}
          src={picLink}
          alt=""
        /> */}
        <Avatar size='2xl' cursor= "pointer" onClick={onOpen} name={profile.name} src={picLink} />
        <Modal isOpen={isOpen} size={'sm'} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Select Profle picture</ModalHeader>
            <ModalCloseButton />
            <ModalBody display={"flex"} flexDirection={["column", "column", "column", "column"]}>
              <Box display={"flex"}  flexDirection={"column"} justifyContent >
               { isLoading? <img  style={{ width:"150px",height:"150px",margin:"auto"}} src="https://i.stack.imgur.com/kOnzy.gif" alt="" />:<img
                  id='profileimage'
                  style={{ cursor: "pointer"}} onClick={onOpen}
                  src={profilepic?URL.createObjectURL(profilepic):picLink}
                  alt=""
                />}
              </Box>
              <div className="profile-modal-inputbox">
                <input
                  style={{ padding: "10px 10px" }}
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    loadfile(event);
                    setProfilepic(event.target.files[0])
                  }}
                />


              </div>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleUpload}>
                upload
              </Button>
              <Button variant='ghost' onClick={handleUpdate}>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      {/* profile-data */}
      <div className="pofile-data">
        <h1>{profile.name&&profile.name}</h1>
        <div className="profile-info" style={{ display: "flex", width: "90%", justifyContent: "space-around", margin: "auto" }}>
          <p>{data?data.length:0} posts</p>
          {/* <p>{profile.following?profile.following.length:0} following</p> */}
          <FollowerList profile={profile} textdata="followers" />
          <FollowerList profile={profile} textdata="following" />

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
        data && data.map((ele)=>(
          <img src={ele.photo} alt="err" />
        ))
       }
      </div>
    </div>
  )
}

export default Profile