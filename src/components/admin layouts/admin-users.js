import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import  {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
export const Adminusers = () => {
let count =1;

  const token = localStorage.getItem("jwtoken");
//console.log(token);
const [udata,setUdata]= useState([]);
const fetchuserdata=async()=>{

  try {
    const res = await fetch("http://localhost:5000/admin/users",{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`,
      },
    })
const data = await res.json()
//console.log("this is data",data);
setUdata(data);
  }
   catch (error) {
    console.log(error)
  }

  
  

}

const deleteuser=async(id)=>{

try {
  

  const res = await fetch(`http://localhost:5000/admin/users/delete/${id}`,{
    method:'DELETE',
    headers:{
      Authorization:`Bearer ${token}`,
    }
  })
  console.log(res)
const data = await res.json();
if(res.ok){
  fetchuserdata();
  toast.success("deeltion successful")
}
}



catch (error) {
  toast.error("errorin deleteion")
}

}
useEffect(() => {
  fetchuserdata();
}, []);
//console.log("the udata is ",udata)
  return (
    <>
 
<h1>Users data</h1>
<table style={{ borderCollapse: 'collapse' }}>
  <tr style={{ borderBottom: '1px solid #ccc' }}>
    <th style={{ padding: '8px', border: '1px solid #ccc' }} scope='col'>S.no</th>
    <th style={{ padding: '8px', border: '1px solid #ccc' }} scope='col'>Name</th>
    <th style={{ padding: '8px', border: '1px solid #ccc' }} scope='col'>Email</th>
    <th style={{ padding: '8px', border: '1px solid #ccc' }} scope='col'>Profession</th>
    <th style={{ padding: '8px', border: '1px solid #ccc' }} scope='col'>Edit</th>
    <th style={{ padding: '8px', border: '1px solid #ccc' }} scope='col'>Delete</th>
  </tr>
  {udata.map((Curruser, index) => (
    <tr key={index}
       style={{ 
         borderBottom: '1px solid #ccc',
         backgroundColor: 'white', // Hover effect
         ':hover': { backgroundColor: 'lightblue' } // Apply hover effect
       }}
    >
      <td style={{ padding: '20px', border: '1px solid #ccc' }} scope='row'>{count++}</td>
      <td style={{ padding: '20px', border: '1px solid #ccc' }}>{Curruser.name}</td>
      <td style={{ padding: '20px', border: '1px solid #ccc' }}>{Curruser.email}</td>
      <td style={{ padding: '20px', border: '1px solid #ccc' }}>{Curruser.profession}</td>
      <td style={{ padding: '20px', border: '1px solid #ccc' }}><Link to={`/admin/users/${Curruser._id}/edit`} className='btn btn-success' >Edit</Link></td>
      <td style={{ padding: '20px', border: '1px solid #ccc' }}><button class="btn btn-danger" onClick={()=>deleteuser(Curruser._id)}>Delete</button></td>
    </tr>
  ))}
</table>


    
    
    
    </>
  )
}
export  default Adminusers;