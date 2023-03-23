import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Homepgae/Card'
import { getAllPost } from '../Redux/AppReducer/action'
const Homepage = () => {

  const data=useSelector(store=>store.AppReducer.data)
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(getAllPost())
  },[])
  return (
    <div>
     {
      data && data.map((ele)=>(
        <Card key={ele._id} {...ele}/>
      ))
     }
    </div>
  )
}

export default Homepage