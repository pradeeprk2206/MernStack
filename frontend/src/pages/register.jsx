import { useForm } from "react-hook-form";
import { registerschema } from "../components/formSchema/registerschema";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import image from '../assets/images.jpg'
function Register(){
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(registerschema)})
    function onSubmit1(data){
        console.log(data)
        alert("register Success")
        navigate("/",{state:data})
    }
    return(
        <>
        <h1 className="heading">Login Form</h1>
        <img src={image} className='image'/>
         <form className="form" onSubmit={handleSubmit(onSubmit1)}>
          USERNAME  : <input type="text" className='name' required placeholder="Enter your UserName here" name='username' {...register("username")}/><br></br>
          <p>{errors.name?.message}</p>
          EMAIL : <input type="email" className='email' required placeholder="Enter your Email here" name='email' {...register("email")}/><br></br>
          <p>{errors.email?.message}</p>
          PASSWORD : <input type="password" className='password' required placeholder="Enter your Password here"  name='password' {...register("password")}/><br></br>
          <p>{errors.password?.message}</p>
          AGE : <input type="number" className='age' required placeholder="Enter your Age here"  name='password' {...register("age")}/><br></br>
          <p>{errors.age?.message}</p>
          <button type="SUBMIT" className='bg-amber-400'>Submit</button>
         </form>
        </>
    )
}
export default Register