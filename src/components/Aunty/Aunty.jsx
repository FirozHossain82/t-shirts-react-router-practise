import React from 'react';
import Cousin from '../Cousin/Cousin.jsx';

const Aunty = () => {
    return (
        <div>
            <h1 className='text-lg'> Aunty </h1>
            <section className='flex'>
                <Cousin>Rabbi</Cousin>
                <Cousin hasFriend={true}>Shohag</Cousin>
            </section>
        </div>
    );
};

export default Aunty;