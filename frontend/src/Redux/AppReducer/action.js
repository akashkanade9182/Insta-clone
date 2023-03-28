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
   return axios.get("https://rich-erin-sturgeon-suit.cyclic.app/instapost/allpost").then((r)=>{
    dispatch({type:types.GET_POST_SUCCESS,payload:r.data.posts})
    console.log(r.data)
   }).catch((e)=>{
    console.log(e)
   })
}

/*proflepage*/


const uploadProfilepic=(payload,setUrl)=>(dispatch)=>{
  dispatch({type:types.ADD_PROFILEPIC_REQUEST})
  return axios.post("https://api.cloudinary.com/v1_1/instacloude1995/image/upload", payload).then((r)=>{
    dispatch({type:types.ADD_PROFILEPIC_SUCCESS})
  setUrl(r.data.url)
  }).catch((e)=>{
    dispatch({type:types.ADD_PROFILEPIC_FAILURE})
    console.log(e)
  })

}

const getOwnPost=(token)=>(dispatch)=>{
  dispatch({type:types.GET_POST_REQUEST})
 
  const options = {
    url: 'https://rich-erin-sturgeon-suit.cyclic.app/instapost/getownpost',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
 
  };

  return axios(options).then((r)=>{
    dispatch({type:types.GET_POST_SUCCESS,payload:r.data.posts})
    console.log(r.data)
   }).catch((e)=>{
    console.log(e)
   })
}

/******************Homepage***************** */

const handleLikes=(id,token)=>async(dispatch)=>{
  dispatch({type:types.PATCH_POST_REQUEST})
  const Config= {
   
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
 
  };

  return axios.patch(`https://rich-erin-sturgeon-suit.cyclic.app/instapost/likes/${id}`,{},Config).then((r)=>{
    dispatch({type:types.PATCH_POST_SUCCESS})
  
    console.log("like success")
   }).catch((e)=>{
    dispatch({type:types.PATCH_POST_FAILURE})
    console.log(e)
   })
}
/***************************Commnet function************************ */
const handleComment=(id,token,payload)=>async(dispatch)=>{
  dispatch({type:types.PATCH_POST_REQUEST})
  const Config= {
   
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
 
  };

  return axios.patch(`https://rich-erin-sturgeon-suit.cyclic.app/instapost/comment/${id}`,{comment:payload},Config).then((r)=>{
    dispatch({type:types.PATCH_POST_SUCCESS})
  
    console.log("commnet post success")
   }).catch((e)=>{
    dispatch({type:types.PATCH_POST_FAILURE})
    console.log(e)
   })

  
}



export {getAllPost,uploadProfilepic,getOwnPost,handleLikes,handleComment}