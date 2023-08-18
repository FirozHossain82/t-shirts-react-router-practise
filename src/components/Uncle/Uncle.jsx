import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin.jsx';
import { MoneyContext } from '../Grandpa/Grandpa.jsx';

const Uncle = () => {
    const  [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
                <h1>Uncle</h1>
                <p>Grandpa Money: {money}</p>
                <button className='border-2 border-green-300 p-2 rounded-md ' onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
                <section className='flex'>
                    <Cousin>Shahin</Cousin>
                    <Cousin>Hossain</Cousin>
                </section>
        </div>
    );
};

export default Uncle;