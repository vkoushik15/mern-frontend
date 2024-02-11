import React,{useState,su, useEffect}from 'react'
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/context';

import Foodmenu from './foodmenu';
export const About = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("jwtoken");

  const{islogged,userAuthentication}= useAuth();
const[data,setData]=useState({
  name:"",
  email:"",
city:"",
profession:""
})



const fetchUserData = async () => {
  try {
    const response = await fetch("http://localhost:5000/about", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error("Error fetching user data:", response.statusText);
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();
    setData(data);
   
  } catch (error) {
    console.error("Error during fetchUserData:", error.message);
   
  }
};
useEffect(() => {
  fetchUserData();
}, []); 


useEffect(()=>{
  if(!islogged){
navigate("/login");
  }
},[islogged,navigate]); 
// useEffect(() => {
//   if (islogged) {
//     fetchUserData();
//   }
// }, [islogged]);

// useEffect(() => {
//   if (!islogged) {
//     navigate("/login");
//   } else {
//     fetchUserData(); // Fetch data after successful login
//   }
// }, [islogged, navigate, userAuthentication]); 



    return (
     
<div>
      {islogged &&
        <>
        <Navbar/>
        <ul>
         <li >name:{data.name}</li>
         <li >email:{data.email}</li>
         <li>city:{data.city}</li>
         <li>profession:{data.profession}</li>
     
        </ul>
      <Foodmenu/>
        </>
      }
      
      </div>
      
    

  
 
  )
    }
export default About;