import React from "react";
import "./TShirt.css";
const TShirt = ({ tshirt,handleAddToCart }) => {
  const { name, price, picture, gender } = tshirt;
  return (
    <div className="t-shirt  ">
      <img src={picture} alt="" />
      <div className="text-center">
        <h4 className="text-xl font-bold text-orange-600">{name}</h4>
        <p className="text-lg font-medium">Price: ${price}</p>
        <button  onClick={() => handleAddToCart(tshirt)} className="border-2 border-purple-400 p-2 rounded-md font-bold bg-green-200">Buy Now</button>
      </div>
    </div>
  );
};

export default TShirt;
