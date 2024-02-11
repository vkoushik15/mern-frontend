import React ,{useState}from 'react'
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
export const Register = () => {
  const navigate = useNavigate();
  const[user,setUser]= useState({
name:"",
email:"",
city:"",
profession:"",
age:"",
password:"",
cpassword:""

  });

  const handleinput = (e) => {
 
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok || response.status===201) {
        const responseData = await response.json();
        toast.success("registration successful");
        navigate("/login");
        setUser({ name:"",email:"",city:"",profession:"",age:"",password:"",cpassword:"" });
        console.log(responseData);
      }
      else if (response.status === 400){
        toast.error("passwordsare not matchnig");
        setUser({ name:"",email:"",city:"",profession:"",age:"",password:"",cpassword:"" });
        navigate("/register");
      }
       else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }


  };
  return (
  <>
  <Navbar/>
  <form className='mt-5' onSubmit={handlesubmit}>
  <div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Name:</span>
  <input type="text" class="form-control-sm" placeholder="Username" name='name' value={user.name} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput}/>
</div>

<div class="input-group ">
  <span class="input-group-text mt-2" id="basic-addon1">Email:</span>
  <input type="email" class="form-control-sm" placeholder="email" name='email' value={user.email} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput}/>
</div>
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">City:</span>
  <input type="text" class="form-control-sm" placeholder="city"  name='city' value={user.city} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput} />
</div>

<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Profession:</span>
  <input type="text" class="form-control-sm" placeholder="what do you do ?" value={user.profession} name='profession' aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput}/>
</div>
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Age:</span>
  <input type="number" class="form-control-sm" placeholder="age" name='age' value={user.age} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput}/>
</div>
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Password:</span>
  <input type="password" class="form-control-sm" placeholder="password" name='password' value={user.password} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput}/>
</div> 
<div class="input-group ">
  <span class="input-group-text" id="basic-addon1">Cpassword:</span>
  <input type="password" class="form-control-sm" placeholder="cpassword" name='cpassword' value={user.cpassword} aria-label="Username" aria-describedby="basic-addon1" autoComplete='off'  onChange={handleinput}/>
</div>

<button type="submit" class="btn btn-dark" >SUbmit</button>
</form>
  </>
  )
}
export default Register;