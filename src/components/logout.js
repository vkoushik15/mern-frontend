
import React,{useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/context'
export const Logout = () => {
 const {logoutuser} = useAuth();
 useEffect(()=>{
 logoutuser()},[logoutuser]
 );


    return <Navigate to ="/login"/>
}
