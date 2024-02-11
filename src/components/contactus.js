import React,{useState} from 'react'
import Navbar from './navbar';
export const Contactus = () => {
    const[user,setUser]= useState({
name:"",
email:"",
textarea:""


    });
const handleinput=(e)=>{

    let name = e.target.name;
    let value =e.target.value;
    setUser({
        ...user,
        [name]:value,
    })
}
const handlesubmit =(e)=>{
    e.preventDefault();
    console.log(user);
}

  return (
    <>
    <Navbar/>
    <form onSubmit={handlesubmit}>
    <div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Name:</span>
  <input type="text" class="form-control-sm" placeholder="Username" name='name' value={user.name} aria-label="Username"  onChange={handleinput} aria-describedby="basic-addon1" autoComplete='off'/>
</div>
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Email:</span>
  <input type="email" class="form-control-sm" placeholder="Email" name='email' aria-label="Username" value={user.email}  onChange={handleinput} aria-describedby="basic-addon1" autoComplete='off'/>
</div>
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Textarea:</span>
  <input type="text" class="form-control-sm" placeholder="enter your mesage" name='textarea' value={user.textarea} aria-label="Username" onChange={handleinput} aria-describedby="basic-addon1" autoComplete='off'/>
</div>
<button type="submit" class="btn btn-dark">Dark</button>
</form>
    </>
  )
}
export default Contactus;