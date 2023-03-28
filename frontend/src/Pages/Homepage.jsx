import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Homepgae/Card'
import { getAllPost,handleLikes } from '../Redux/AppReducer/action'
import axios from "axios"
import Loader from '../Components/Homepgae/Loader'
import { getSingleUser } from '../Redux/AuthReducer/action'
import "../Styles/Hoempage.css"
const Homepage = () => {
  const [count, setCount] = useState(0)
  const [showButton, setShowButton] = useState(false);
  const data=useSelector(store=>store.AppReducer.data)
  const profile=useSelector(store=>store.AuthReducer.data)
  const token=useSelector(store=>store.AuthReducer.token)
  const isLoading = useSelector(store => store.AppReducer.isLoading)
  const dispatch=useDispatch();
console.log(data)
const handlefollow=(payload)=>{
  const Config={
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
  }

 return axios.patch('https://rich-erin-sturgeon-suit.cyclic.app/instauser/follow', payload, Config)
 
}


  const handleunfollow=(payload)=>{
    const Config={
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `bearer ${token}`
      },
    }
  
  
   return axios.patch('https://rich-erin-sturgeon-suit.cyclic.app/instauser/unfollow', payload, Config)
 

  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(()=>{
    dispatch(getAllPost())
    console.log(data.following,data.followers,count)
  },[count,profile.followers,profile.following])

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
     {
      data && data.map((ele)=>(
        
         <Card key={ele._id} handlefollow={handlefollow}   setCount={setCount} handleunfollow={handleunfollow} {...ele}/>

        
      ))
     }
          <button
      className={`scroll-to-top-button ${showButton ? "show-scroll-to-top-button" : ""}`}
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="9" x2="12" y2="5" />
  <line x1="8" y1="9" x2="12" y2="5" />
</svg></button>
    </div>
  )
}

export default Homepage