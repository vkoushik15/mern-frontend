import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../store/context';
export const Navbar = () => {
  const {islogged}=useAuth();
  const [isadmin,setIsadmin]=useState();
  const[isloading,setIsloading]= useState(true);
 const token = localStorage.getItem('jwtoken');
const adminu =async()=>{
  try {
    
    const resp = await fetch("http://localhost:5000/about",{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    if(resp.ok){
    const data = await resp.json();
setIsadmin(data.isadmin);
setIsloading(false);
    }
  } catch (error) {
    console.log(error);
    setIsloading(false)
  }
}

useEffect(()=>{
  adminu();
},[])

console.log(isadmin);
console.log(isloading);

  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-black py-3">
  <div class="container-fluid">
    <a class="navbar-brand ml-4 fs-5" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav fs-6">
        <li class="nav-item">
      <Link to ="/"  > <a class="nav-link active" aria-current="page" href="#">Home</a></Link> 
        </li>
        
          {islogged ? 
          <>
          <li   class="nav-item">
        <Link to ="/logout"> <a class="nav-link active">Logout</a></Link>
        </li>
{isadmin && !isloading && (
  <li className='nav-item'>
    <Link to="/admin"><a className='nav-link active'>Admin</a></Link>
  </li>
)}
        <li   class="nav-item">
        <Link to ="/about"> <a class="nav-link active">About</a></Link>
        </li>





        </>
        :
        <>
<li class="nav-item">
      <Link to="/register">  <a class="nav-link active" href="#">Register</a></Link>  
        </li>
        <li class="nav-item">
         <Link to ="/login" ><a class="nav-link active" href="#">Login</a></Link>
        </li>
        </>
        }
        
        <li class="nav-item">
      <Link to ="/contact" > <a class="nav-link active" href="#">Contact us</a></Link>  
        </li>
      </ul>
    </div>
  </div>
</nav>



    </>

  )
}
export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../store/context'; // Assuming correct relative path

// export const Navbar = () => {
//   const { islogged, isadmin, isLoading } = useAuth();

//   return (
//     <>
//       <nav class="navbar navbar-expand-lg navbar-dark bg-black py-3">
//         <div class="container-fluid">
//           <a class="navbar-brand ml-4 fs-5" href="#">Navbar</a>
//           {/* ... other navbar elements */}

//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul class="navbar-nav fs-6">
//               <li class="nav-item">
//                 <Link to="/" exacte ClassName="nav-link active" href="#">Home</Link>
//               </li>
//               {/* ... other links (replace placeholders) */}
//               <li class="nav-item">
//                 <Link to="/about" activeClassName="active" href="#">About</Link>
//               </li>
//               {islogged ? (
//                 <>
//                   <li class="nav-item">
//                     <Link to="/logout" activeClassName="active" href="#">Logout</Link>
//                   </li>
//                   {isadmin && !isLoading && (
//                     <li className='nav-item'>
//                       <Link to="/admin"><a className='nav-link active'>Admin</a></Link>
//                     </li>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   <li class="nav-item">
//                     <Link to="/register" activeClassName="active" href="#">Register</Link>
//                   </li>
//                   <li class="nav-item">
//                     <Link to="/login" activeClassName="active" href="#">Login</Link>
//                   </li>
//                 </>
//               )}
//               <li class="nav-item">
//                 <Link to="/contact" activeClassName="active" href="#">Contact us</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
