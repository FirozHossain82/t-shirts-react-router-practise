import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt.jsx";
import Cart from "../Cart/Cart.jsx";
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
  const tshirts = useLoaderData();
  // console.log(tshirts);
  const [cart, setCart] = useState([]);


/*   const handleAddToCart = tshirt =>{
     const newCart = [...cart, tshirt];
     setCart(newCart);
  }
 */

  // jodi kono card ekbar er besi add korte na dite chai tahole ei code likhte hobe

  const handleAddToCart = tshirt => {
    const exists = cart.find(ts => ts._id ===tshirt._id)
    if(exists){
        toast('You have already added this t-shirt');
    }
    else{
      const newCart = [...cart,tshirt];
      setCart(newCart);
    }
  }

  const handleRemoveFromCart = id =>{
    const remaining = cart.filter(ts => ts._id !==id);
    setCart(remaining)
  }

  return (
    <div className="home-container   px-6">
       <div className="t-shirts-container">
                {tshirts.map((tshirt) => (
                <TShirt 
                key={tshirt._id} 
                tshirt={tshirt}
                handleAddToCart = {handleAddToCart}
                ></TShirt>
                ))}
         </div>
         <div className="cart-container">
                    <Cart
                    handleRemoveFromCart = {handleRemoveFromCart}
                    cart={cart}
                    ></Cart>
         </div>

    </div>
  );
};

export default Home;
