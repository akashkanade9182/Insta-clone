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
  Button, Box
} from '@chakra-ui/react'
import { uploadProfilepic } from '../Redux/AppReducer/action'
import { useDispatch, useSelector } from 'react-redux'



const Profile = () => {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
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
  const dispatch = useDispatch()

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


  return (
    <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        <img

          style={{ cursor: "pointer" }} onClick={onOpen}
          src={picLink}
          alt=""
        />
        <Modal isOpen={isOpen} size={'sm'} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Select Profle picture</ModalHeader>
            <ModalCloseButton />
            <ModalBody display={"flex"} flexDirection={["column", "column", "column", "column"]}>
              <Box display={"flex"} flexDirection={"column"} justifyContent >
               { isLoading? <img src="https://i.stack.imgur.com/kOnzy.gif" alt="" />:<img
                  id='profileimage'
                  style={{ cursor: "pointer", }} onClick={onOpen}
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
              <Button variant='ghost'>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      {/* profile-data */}
      <div className="pofile-data">
        <h1>{"akash kanade"}</h1>
        <div className="profile-info" style={{ display: "flex", width: "90%", justifyContent: "space-around", margin: "auto" }}>
          <p>{"0"} posts</p>
          <p>{"0"} followers</p>
          <p>{"0"} following</p>
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
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />
        <img src="https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="photo" />

      </div>
    </div>
  )
}

export default Profile