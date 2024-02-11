import { createContext,useContext,useState,useEffect} from "react";

 export const Authtoken = createContext();
export const Authprovider=({children})=>{
  const[isloading,setIsloading]= useState(true);

  const [user, setUser] = useState("");
  const [isadmin,setIsadmin] = useState();
  const [token, setToken] = useState(localStorage.getItem("jwtoken"));
const storeinLS=(servertoken)=>{
    setToken(servertoken);
 return localStorage.setItem("jwtoken",servertoken)
 
}


let islogged = !!token;


const logoutuser =()=>{
setToken("");
return localStorage.removeItem("jwtoken")
}
const userAuthentication = async () => {
  
 
  try {
    const response = await fetch("http://localhost:5000/about", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

   // console.log("here it is", localStorage.getItem("jwtoken"))
//console.log("hi from context",response);
    if (response.ok) {
      const data = await response.json();

      setIsadmin(data.isadmin);
      setIsloading(false); 
     
   //  setUser(data);
    
    } else {
      console.error("Error fetching user data");
      setIsloading(false);
    }
  } catch (error) {
    console.log("fuck this error");
    setIsloading(false);
  }
};

// console.log(isloading);
// console.log(isadmin) ;

useEffect(() => {
  userAuthentication();
}, []);

return(
<Authtoken.Provider value = {{storeinLS,islogged,logoutuser,userAuthentication,user,token,isadmin,isloading}}>
{children}

</Authtoken.Provider>

);
};
export const useAuth = () => {
    const authContextValue = useContext(Authtoken);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };