import axios from "axios"
import * as types from "./actionType"

const postCloude = (payload) => {
  return axios.post("https://api.cloudinary.com/v1_1/instacloude1995/image/upload", payload)
}

// const postDetails = () => {
//   let data = new FormData()
//   data.append("file", image)
//   data.append("upload_preset", "insta-clone")
//   data.append("cloud_name", "instacloude1995")
//   postCloude(data).then((r) => {
//     console.log(r.data)
//   }).catch((e) => {
//     console.log(e)
//   })
// }

//get all post
const getAllPost=()=>(dispatch)=>{
   dispatch({type:types.GET_POST_REQUEST})
   return axios.get("http://localhost:7000/instapost/allpost").then((r)=>{
    dispatch({type:types.GET_POST_SUCCESS,payload:r.data.posts})
    console.log(r.data)
   })
}

/*proflepage*/

const updateProfilepic=(payload)=>{
return axios.patch(`http://localhost:7000/instauser/allpost`)
}
const uploadProfilepic=(payload,setUrl)=>(dispatch)=>{
  dispatch({type:types.ADD_PROFILEPIC_REQUEST})
  return axios.post("https://api.cloudinary.com/v1_1/instacloude1995/image/upload", payload).then((r)=>{
    dispatch({type:types.ADD_PROFILEPIC_SUCCESS})
  setUrl(r.data.url)
  }).then.catch((e)=>{
    dispatch({type:types.ADD_PROFILEPIC_FAILURE})
    console.log(e)
  })

}
export {getAllPost,uploadProfilepic}