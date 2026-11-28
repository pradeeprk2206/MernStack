import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import API from "../components/api"
function Dashboard(){
const location=useLocation();
const[count,setCount]=useState(0)
  const[userdata,setuserdata]=useState("")
  //function displaydate(){
    //setuserdata(location.state);
    //console.log(location.state)}
    useEffect(()=>{
         setuserdata(location.state);
         console.log(userdata)

    }
  )
  const checkendpoint= async ()=>{
    const response= await API.get("/api/get")
    console.log(response.data.message);
  }
  return (
    <>
       <div>{userdata.username}</div>
       <div>qwertyui</div>
       <button onClick={()=>setCount(count+1)}>count</button>
       <button onClick={()=>{checkendpoint()}}>click me</button>
    </>
  
)
}
export default Dashboard