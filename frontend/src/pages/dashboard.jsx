import { useState } from "react";
import {useLocation} from "react-router-dom";
function Dashboard(){
const location=useLocation();
  const[userdata,setuserdata]=useState("")
  function displaydate(){
    setuserdata(location.state);
    console.log(userdata)
  }
  return (<div><button onClick={displaydate}>Submit</button></div>)
}
export default Dashboard
