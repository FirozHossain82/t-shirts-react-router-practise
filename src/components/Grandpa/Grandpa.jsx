import React from 'react';
import Father from '../Father/Father.jsx';
import Uncle from '../Uncle/Uncle.jsx';
import Aunty from '../Aunty/Aunty.jsx';
import './grandpa.css'
const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div  className='grandpa '>
            <h1 className='text-center text-xl font-bold py-4'> Grandpa </h1>
            <section className='text-center flex'>
                <Father ring = {ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;