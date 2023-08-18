import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message ;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }
    else{
        message = <div>
            <h3>Thanks for wasting your money</h3>
        </div>
    }

    return (
        <div className='ml-6 text-center font-semibold'>
            <h1 className='text-xl font-bold'>Order Summary:{cart.length }</h1>
            {
                cart.length > 2 ? <span>Aro kino</span>: <span>Taka Shas Vai</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button className='text-violet-500 '
                onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>) 
            }
            {
                cart.length === 2 && <p>Double Buy please..</p>
            }
            {
                cart.length == 3 || <h3 className='text-lg font-bold'>Tinta tho hoilo na!!!</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1.use if OR if else to set a variable that will contain an element, components.
 * 2.ternary: condition ? 'for true' : "false".
 * 3.Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||:  (if the condition is false then the next thing will be displayed)
 * **/

/**
 * CONDITIONAL CSS CLASS
 * 1.<h2>className = {cart.length == 1 ? 'blue' : 'red'}</h2>
 * 1.use ternary
 * 
 * 2. ternary inside template string
 * <p>className={` bold bordered ${cart.length ===3 ? 'yellow' : 'purple'}`}</p>
 * **/