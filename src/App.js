
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import Register from './components/register';
import Login from './components/login';
import Contactus from './components/contactus';
import Error from './components/error';
import About from './components/about';
import Admin from './components/admin';
import Adminusers from './components/admin layouts/admin-users';
import Adminorders from './components/admin layouts/admin-orders';
import {Routes,Route} from 'react-router-dom';
import Adminupdates from './components/admin layouts/adin-updates';
import { Logout } from './components/logout';
function App() {
  return (
   <>
<Routes>

  <Route path ='/' element={<Main/>}/>
  <Route path ="/register" element={<Register/>}/>
  <Route path ="/login" element={<Login/>}/>
  <Route path ="/contact" element={<Contactus/>}/>
  <Route path ="*" element={<Error/>}/>
<Route path ="/about" element={<About/>}/>
<Route path ="/logout" element={<Logout/>}/>
<Route path ="/admin" element={<Admin/>}>

  <Route path ="users" element={<Adminusers/>}/>
  <Route path='orders' element={<Adminorders/>}/>
  <Route path='users/:id/edit' element={<Adminupdates/>}/>
  
</Route>

</Routes>

   </>
  );
}

export default App;
