/*import React,{useState} from 'react'


export const Cart = ({title,aboutfood,additems,price,removeItem,calculateTotalPrice}) => {

const [ordervalue,setOrdervalue]= useState(0);


const increaseval =()=>{
setOrdervalue(ordervalue + 1);
}
const decreaseval=()=>{
    if(ordervalue>=1){
    setOrdervalue(ordervalue-1);
    }
    else{
        setOrdervalue(0);
    }
}


const collectandsend=()=>{
  additems(title,ordervalue);
console.log(title);
console.log(ordervalue);
calculateTotalPrice();

}
const removething=()=>{
  removeItem(title);
  calculateTotalPrice();
}
  return (
   <>
   <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >{title}</h5>
    <p class="card-text">{aboutfood}</p>
    <p>Price =  ₹{price}</p>
    <div className=''>
    <div className="d-flex align-items-center">
  <button className="btn btn-outline-secondary me-2" onClick={increaseval}>+</button>
  <div className="bg-dark text-white py-2 px-4  rounded-square mx-2"    >{ordervalue}</div>
  <button className="btn btn-outline-secondary" onClick={decreaseval}>-</button>
</div>


    </div >
<form >
    <button href="#" class="btn btn-primary" type='submit' onClick={collectandsend}>Order Now</button>
    <button class="btn btn-primary m-2" type='submit' onClick={removething}>Remove</button>
    </form>
  </div>
</div>
   
   </>
  )
}
export default Cart; 
import React, { useState } from 'react';
import Cart from './cart';

export const Foodmenu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotalPrice = () => {
    setTotal(cartItems.reduce((total, item) => {
      const itemPrice = item.price; // Access price directly from item object
      return total + itemPrice * item.quantity;
    }, 0));
  };

  const addItems = (item, quantity) => {
    setCartItems([...cartItems, { name: item, quantity }]);
    calculateTotalPrice(); // Recalculate total after adding item
  };

  const updateItems = (item, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.name === item
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
    calculateTotalPrice(); // Recalculate total after updating quantity
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.name !== item));
    calculateTotalPrice(); // Recalculate total after removing item
  };

  return (
    <>
      <Cart
        title="shawarma"
        aboutfood="filled with tasty chicken in chapati"
        price={120}
        addItems={addItems}
        removeItem={removeItem}
        calculateTotalPrice={calculateTotalPrice}
      />

      <h2>Your total orders</h2>
      {cartItems.length > 0 && (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.name}>
                {item.name} - {item.quantity} - ₹{item.price}
              </li>
            ))}
            <li>The total price is ₹{total}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Foodmenu;*/
/*import React, { useState } from 'react';

export const Cart = ({ title, aboutfood, additems, price, removeItem, calculateTotalPrice }) => {
  const [orderQuantity, setOrderQuantity] = useState(0); // Initial quantity set to 1

  const increaseQuantity = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (orderQuantity >= 1) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  const handleAddToCart = (event) => {
    
    event.preventDefault();
    additems(title, orderQuantity,price);
   
   calculateTotalPrice();
  };

  const handleRemove = (event) => {
   
    event.preventDefault();
    removeItem(title);
    calculateTotalPrice();
    setOrderQuantity(0);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{aboutfood}</p>
          <p>Price = ₹{price}</p>
          <div className="quantity-control">
            <button className="btn btn-outline-secondary me-2" onClick={increaseQuantity}>
              +
            </button>
            <div className="bg-dark text-white py-2 px-4 rounded-square mx-2">{orderQuantity}</div>
            <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>
              -
            </button>
          </div>
          <form>
            <button className="btn btn-primary" type="submit" onClick={handleAddToCart}>
              Order Now
            </button>
            <button className="btn btn-primary m-2" type="submit" onClick={handleRemove}>
              Remove
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
*/
import React, { useState } from 'react';

export const Cart = ({ title, aboutfood, additems, price, removeItem,image }) => {
  const [orderQuantity, setOrderQuantity] = useState(0);

  const increaseQuantity = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (orderQuantity >= 1) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  const handleAddToCart = (event) => {
    event.preventDefault(); 
    additems(title, orderQuantity, price);
    setOrderQuantity(0);
  };

  const handleRemove = (event) => {
    event.preventDefault();
    removeItem(title);
  };

  return (
    <>
      <div className="card" style={{ width: '18rem',margin:"20px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{aboutfood}</p>
          <p>Price = ₹{price}</p>
          <div className="quantity-control">
            <button className="btn btn-outline-secondary me-2" onClick={increaseQuantity}>
              +
            </button>
            <div className="bg-dark text-white py-2 px-4 rounded-square mx-2">{orderQuantity}</div>
            <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>
              -
            </button>
          </div>
          <form>
            <button className="btn btn-primary" type="submit" onClick={handleAddToCart}>
              Order Now
            </button>
            <button className="btn btn-primary m-2" type="submit" onClick={handleRemove}>
              Remove
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
