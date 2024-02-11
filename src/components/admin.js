// import React ,{useEffect,useState}from 'react'
// import Navbar from './navbar';
// import { NavLink ,Outlet,Navigate} from 'react-router-dom';
// import { useAuth } from '../store/context';
// export const Admin = () => {
//   const token = localStorage.getItem('jwtoken')
//  const [isadmin,setIsadmin]= useState(false);
// const adminauth =async()=>{
//   try {
//     const response = await fetch("http://localhost:5000/about",{
// method:'GET',
// headers:{
//   Authorization:`Bearer ${token}`
// }

//     })
// if(response.ok){
//   const data =await response.json();
//   console.log(data.isadmin);
//  if(data.isadmin){
//   console.log("data.isamdin is", data.isadmin)
//   setIsadmin(true);
//  }
// }
// else{
// console.log("nodatarecived")
// }

//   } catch (error) {
//     console.log(error)
//   }
// }


// useEffect(()=>{

//   adminauth();
// },[])



//   return (
//     <>
//     {isadmin?(   
//       <>
//        <Navbar/>
// <li>
//     <NavLink to ="/admin/users">Users</NavLink>
// </li>
// <li>
//     <NavLink to = "/admin/orders">Orders</NavLink>
// </li>
// <Outlet/>
// </>

// ):(

//   <Navigate to="/" replace />
// )}

//     </>




//   )
// }
// export default Admin;
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import { NavLink, Outlet, Navigate } from 'react-router-dom';


export const Admin = () => {
  const token = localStorage.getItem('jwtoken');
  const [isAdmin, setIsAdmin] = useState(null); // Initial state as null
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const adminAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/about", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsAdmin(data.isadmin);
        } else {
          console.log("nodatarecived");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Always set loading to false
      }
    };

    adminAuth();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAdmin ? (
        <>
          <Navbar />
          <li>
            <NavLink to="/admin/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">Orders</NavLink>
          </li>
          <Outlet />
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Admin;
