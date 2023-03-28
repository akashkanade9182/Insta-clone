import React, { useState, useEffect } from 'react'
import "./Card.css"
import axios from "axios"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button, Box, Avatar,useToast
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost, handleComment, handleLikes } from '../../Redux/AppReducer/action'
import { getSingleUser } from '../../Redux/AuthReducer/action'
import Profilemodel from './Profilemodel'
import Commentmodel from './Commentmodel'

const getUser = (id) => {
  return axios.get(`https://rich-erin-sturgeon-suit.cyclic.app/instauser/getusercard/${id}`)
}

const Card = ({ _id, setCount, body,comments, likes, photo, postedBy, handleunfollow, handlefollow }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [postuser, setPostuser] = useState({});
  const [comment,setComment]=useState("")
  const [profile, setProfile] = useState({})
  const data = useSelector(store => store.AuthReducer.data)
  const dispatch = useDispatch();
  const toast = useToast()
  const [status, setStatus] = useState(data.following.includes(profile._id) ? false : true)
  const token = useSelector(store => store.AuthReducer.token)
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"


  const handleFollowUpdate = () => {
    handlefollow({ followId: profile._id })
      .then((response) => {
        console.log("follow update successful")
        dispatch(getSingleUser(token))

        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.log("error in follwing")
        console.log(error);
      });
    console.log("trigered follow")
  }

  const handleUnfollowUpdate = () => {
    handleunfollow({ followId: profile._id })
      .then((response) => {
        console.log("unfollow update successful")
        dispatch(getSingleUser(token))
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.log("error in unfollwing")
        console.log(error);
      });

    console.log("trigered unfollow")
  }


  const handleLikesEvent = () => {
    dispatch(handleLikes(_id, token)).then(() => {
      dispatch(getAllPost())
    }).catch((e) => {
      console.log(e)
    })
  }

  const handleCommentEvent=()=>{
    dispatch(handleComment(_id,token,comment)).then(() => {
      toast({
        position: 'top-center',
        render: () => (
          <div style={{backgroundColor:" #272150",borderRadius:"9px" ,display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px",padding:"10px 10px" ,height:"50px",color:"white"}}>
            commented successfully
          </div>
        ),
      })
    }).catch((e) => {
      console.log(e)
    })
console.log(comment,_id,token)
  }


  useEffect(() => {
    getUser(postedBy).then((r) => {

      setProfile(r.data)
    })
  }, [postedBy])

  return (
    <Box w={["95%","500px","500px","500px"]} className="card">
      {/* card header */}
      <div className="card-header">
        {/* <div className="card-pic"> */}
        <Profilemodel profile={profile} />
        {/* </div> */}
        <h5>
          {
            profile && profile.name
          }
        </h5>
        {
          data.following.includes(profile._id) ? <h2 className='followtext' onClick={handleUnfollowUpdate} >unfollow</h2> : <h2 className='followtext' onClick={handleFollowUpdate}>follow</h2>
        }
      </div>
      {/* card image */}
      <div className="card-image">
        <img src={photo} alt="" />
      </div>
      {/* card content */}
      <div className="card-content">
        <div className='first-feature'>
          <span style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={handleLikesEvent} >
            {
              likes.includes(data._id) ? <svg style={{ color: "red" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" fill="red"></path>
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>

            }

          </span>

          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
              <line x1="12" y1="12" x2="12" y2="12.01" />
              <line x1="8" y1="12" x2="8" y2="12.01" />
              <line x1="16" y1="12" x2="16" y2="12.01" />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </span>
        </div>
        <div className='second-feature'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmarks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z" />
              <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6" />
            </svg>
          </span>
        </div>

      </div>
      {/*likes*/}
      <div style={{ textAlign: "left", padding: "0 5px" }}>
        <h5>
          {likes.length} likes
        </h5>

      </div>

      {/*view comments*/}
      <Box textAlign="left" p="0 5px">
        <Commentmodel Id={_id} comments={comments}/>
        {/* <span style={{ textAlign: "left", cursor: "pointer" }} onClick={onOpen}>View all commments</span>
        <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody display={"flex"} flexDirection={["column", "column", "row", "row"]}>
              <Box>
                <img

                  src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                  alt=""
                />
              </Box>
              <div className="card-header">
                <div className="card-pic">
                  <img

                    src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                    alt=""
                  />
                </div>
                <h5>
                  akash kanade
                </h5>
              </div>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </Box>
      {/* add Comment */}
      <div className="add-comment">
        <span className="material-symbols-outlined">mood</span>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
        onChange={(e)=>setComment(e.target.value)}

        />
        <button
          className="comment"
            onClick={handleCommentEvent}
        >
          Post
        </button>
      </div>

    </Box>
  )
}

export default Card