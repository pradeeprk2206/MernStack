import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
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

    },[]
  )
  return (
    <>
       <div>{userdata.username}</div>
       <div>qwertyui</div>
       <button onClick={()=>setCount(count+1)}>count</button>
    </>
  
)
}
export default Dashboard