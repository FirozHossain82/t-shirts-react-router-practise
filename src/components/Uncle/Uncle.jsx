import React from 'react';
import Cousin from '../Cousin/Cousin.jsx';

const Uncle = () => {
    return (
        <div>
                <h1>Uncle</h1>
                <section className='flex'>
                    <Cousin>Shahin</Cousin>
                    <Cousin>Hossain</Cousin>
                </section>
        </div>
    );
};

export default Uncle;