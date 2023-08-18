import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='ml-6 text-center font-semibold'>
            <h1 className='text-xl font-bold'>Order Summary:{cart.length }</h1>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button className='text-violet-500 '
                onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>) 
            }
        </div>
    );
};

export default Cart;