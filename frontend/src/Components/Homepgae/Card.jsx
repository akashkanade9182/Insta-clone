import React from 'react'
import "./Card.css"
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


const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
  return (
    <div className="card">
      {/* card header */}
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
      {/* card image */}
      <div className="card-image">
        <img src={"https://media.istockphoto.com/id/1368242749/photo/the-knob-in-falmouth-on-cape-cod.jpg?s=1024x1024&w=is&k=20&c=UCjAxYj8IOlszn16o74KyExCIklg9GWAgw_xApaf0sA="} alt="" />
      </div>
      {/* card content */}
      <div className="card-content">
        <div className='first-feature'>
          <span >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
          101 likes
        </h5>

      </div>

      {/*view comments*/}
      <Box textAlign="left" p="0 5px">
        <span style={{textAlign:"left",cursor:"pointer"}} onClick={onOpen}>View all commments</span>
        <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody display={"flex"} flexDirection={["column","column","row","row"]}>
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
        </Modal>
      </Box>
      {/* add Comment */}
      <div className="add-comment">
        <span className="material-symbols-outlined">mood</span>
        <input
          type="text"
          placeholder="Add a comment"


        />
        <button
          className="comment"

        >
          Post
        </button>
      </div>

    </div>
  )
}

export default Card