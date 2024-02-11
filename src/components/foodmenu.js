
import React, { useState, useEffect } from 'react';
import Cart from './cart';
import {toast} from 'react-toastify';
import shawarma from './images/shawarma.jpg';
import burger from './images/burger2.jpg'
export const Foodmenu = () => {
  const token = localStorage.getItem("jwtoken");
  const [cartitems, setCartitems] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotalPrice = () => {
    setTotal(cartitems.reduce((total, item) => total + item.price * item.quantity, 0));
  };

  const additems = (item, quantity, price) => {
    setCartitems((prevCartItems) => [
      ...prevCartItems,
      { name: item, quantity, price },
    ]);

    // Use the callback form of setTotal to ensure it works with the latest state
    setTotal((prevTotal) => prevTotal + price * quantity);
  };

  const updateitems = (item, newquantity) => {
    setCartitems(
      cartitems.map((cartitem) =>
        cartitem.name === item ? { ...cartitem, quantity: newquantity } : cartitem
      )
    );
  };

  const removeItem = (item) => {
    setCartitems(cartitems.filter((cartitem) => cartitem.name !== item));
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartitems]);


  const onSubmit=async()=>{
    try{
     const post =await fetch("http://localhost:5000/about",{
method:'POST',
headers:{
  "Content-Type":"application/json",
  Authorization: `Bearer ${token}`
},
body: JSON.stringify({ items: cartitems, totalPrice: total }),

     })
if(!post.ok){
toast.error("errorin recieving the order");
}
else{
  toast.success("saved sucessfully");
}
const respdata = await post.json();
console.log("here is your order data", respdata);
setCartitems([]);
setTotal(0);
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div style={{display:"flex"}}>
      <Cart
        title={'shawarma'}
        aboutfood={'filled with tasty chicken in chapati'}
        price={120}
        additems={additems}
        removeItem={removeItem}
        calculateTotalPrice={calculateTotalPrice}
        image = {shawarma}
        
      />
      <Cart
        title={'burger'}
        aboutfood={'filled with cheese and chicken with breads'}
        price={150}
        additems={additems}
        removeItem={removeItem}
        calculateTotalPrice={calculateTotalPrice}
        image={burger}
      />
      </div>
      <h2>Your total orders</h2>
      {cartitems.length > 0 && (
        <>
          <ul>
            {cartitems.map((item) => (
              <li key={item.name} >
                {item.name}-{item.quantity}- ₹{item.price * item.quantity}
              </li>
            ))}
            <li> the total price is ₹{total}</li>
          </ul>
        </>
      )}
      {total>0 &&
      <button className='btn btn-dark mt-5' onClick={onSubmit}>Submit</button>
}
    </>
  );
};

export default Foodmenu;
