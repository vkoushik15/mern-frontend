import React,{useState}from 'react'
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../store/context';
import {toast} from 'react-toastify';
export const Login = () => {
  const {storeinLS} = useAuth();
  const navigate = useNavigate();
  const[user,setUser]= useState({
    email:"",
    password:""
  });
const handleinput=(e)=>{
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]:value,
  })
}

const handlesubmit=async(e)=>{
  e.preventDefault();
  console.log(user);

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
   
    if(response.ok||response.status === 201){
      const resp =  await response.json();
      console.log(resp);
      setUser({email:"",password:""});
     // toast.success("login successful");
     toast.success('login successful' );
      console.log("here it si ", resp.token);
    storeinLS(resp.token);
    
      navigate("/about");
    }
    else if(response.status === 401){
      toast.error("the credentials arenot matching")
    }
    
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
    <Navbar/>
    <form onSubmit={handlesubmit}>
    <div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Email:</span>
  <input type="email" class="form-control-sm" placeholder="Email" name='email'  onChange={handleinput} value={user.email} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'/>
</div>
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">password:</span>
  <input type="password" class="form-control-sm" placeholder="Password" onChange={handleinput} name='password'value={user.password} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'/>
</div>
<button type="submit" class="btn btn-dark">Dark</button>
</form>
    </>
  )
}
export default Login;