import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import image from '../assets/images.jpg'
 function Login(){ 
  const navigate = useNavigate();
  const[formdata,setformdata]=useState({
    username:"",
    email:"",
    password:"",
  })
  function handlechange(e){
    e.preventDefault();
    setformdata({
      ...formdata, 
      [e.target.name]: e.target.value}
    )
  }
  const formsubmit=(e)=>
  {
    e.preventDefault()
    console.log(formdata)
  }
  return(
    <>
    <h1 className="heading">Login Form</h1>
    <img src={image} className='image'/>
    
    <form className="form" onClick={formsubmit}>
    USERNAME  : <input type="text" className='name' required placeholder="Enter your UserName here" name='username'  onChange={handlechange}/><br></br>
    EMAIL : <input type="email" className='email' required placeholder="Enter your Email here" name='email' onChange={handlechange}/><br></br>
    PASSWORD : <input type="password" className='password' required placeholder="Enter your Password here"  name='password' onChange={handlechange}/><br></br>
    <button type="SUBMIT" className='bg-amber-400'  onClick={() => navigate("/dashboard")}>Submit</button>
    </form>
    </>
  )  
}
export default Login
