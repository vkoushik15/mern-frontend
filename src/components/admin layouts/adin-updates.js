import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
export const Adminupdates = () => {
    const params = useParams();
    const token = localStorage.getItem("jwtoken");
const [data,setData]= useState({
email:'',
name:'',
age:''

})

const getdata= async(id)=>{

try {
    const res = await fetch(`http://localhost:5000/admin/users/${params.id}`,{

    method:'GET',
    headers:{
        Authorization: `Bearer ${token}`
    }
    })
const data =await res.json();

setData(data);




} catch (error) {
    console.log(error);
}

}
useEffect(() => {
    getdata(params.id);
}, [params.id]);

const handleinput=(e)=>{

    let name = e.target.name;
    let value = e.target.value;
    setData({
...data,
[name]:value,
    })
}
const handlechange = async(e)=>{
e.preventDefault();
try {
    
const res = await fetch(`http://localhost:5000/admin/users/update/${params.id}`,{
    method:'PATCH',
    headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
    },
    body:JSON.stringify(data)
})
if(res.ok){
toast.success("updated successfully")
}
else if (!res.ok){
    toast.error("not updated succesfully")
}

} catch (error) {
    console.log(error);
}


}
  return (
   <>
   <h1>the user data</h1>


   <form onSubmit={handlechange}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={handleinput}autoComplete='off'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"name='name' value={data.name} onChange={handleinput} autoComplete='off'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
    <input type="number" className="form-control" id="exampleInputPassword1" name='age' value={data.age} onChange={handleinput} autoComplete='off'/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>


   </>
  )
}
export default Adminupdates
