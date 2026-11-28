import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image from "../assets/images.jpg";

function Login() {
  const location=useLocation();
  const navigate = useNavigate();
  const [logindata, setlogindata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const registerdata=location.state;
  function handlechange(e) {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value,
      
    });
  }

  const formsubmit = (e) => {
    e.preventDefault();
    if(registerdata.username===logindata.username && registerdata.email===logindata.email && registerdata.password===logindata.password){
        alert("Login Successful")
        navigate("/dashboard",{state:logindata})
    }
    else{
      console.log("Invalid credentials")

    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center" >Login Form</h1>
      <img src={image} className="mx-auto" alt="Login banner" />
       <div className="flex justify-center bg-gray-100 border border-e-black rounded-xl p-10  max-w-xs mx-auto ">
      <form className="space-y-5" onSubmit={formsubmit}  >
        USERNAME :{" "}
        <input type="text" className="w-full border p-2 rounded" required placeholder="Enter your UserName here" name="username" value={logindata.username} onChange={handlechange}/>
        <br />
        EMAIL :{" "} <input type="email" className="w-full border p-2 rounded" required placeholder="Enter your Email here" name="email" value={logindata.email} onChange={handlechange} />
        <br />
        PASSWORD :{" "} <input type="password" className="w-full border p-2 rounded"  required  placeholder="Enter your Password here"  name="password"  value={logindata.password}  onChange={handlechange}/>
        <br />
        <button type="submit" className="bg-amber-400 w-full border p-2 rounded">Submit </button>
      </form>
      </div>
    </>
  );
}

export default Login;