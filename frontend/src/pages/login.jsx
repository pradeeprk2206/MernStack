import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images.jpg";

function Login() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handlechange(e) {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    navigate("/dashboard", { state: formdata });
  };

  return (
    <>
      <h1 className="heading">Login Form</h1>
      <img src={image} className="image" alt="Login banner" />

      <form className="form" onSubmit={formsubmit}>
        USERNAME :{" "}
        <input
          type="text"
          className="name"
          required
          placeholder="Enter your UserName here"
          name="username"
          value={formdata.username}
          onChange={handlechange}
        />
        <br />
        EMAIL :{" "}
        <input
          type="email"
          className="email"
          required
          placeholder="Enter your Email here"
          name="email"
          value={formdata.email}
          onChange={handlechange}
        />
        <br />
        PASSWORD :{" "}
        <input
          type="password"
          className="password"
          required
          placeholder="Enter your Password here"
          name="password"
          value={formdata.password}
          onChange={handlechange}
        />
        <br />
        <button type="submit" className="bg-amber-400">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;