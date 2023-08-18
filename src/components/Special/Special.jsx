import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa.jsx';

const Special = ({ring}) => {
    const Angti = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p>Gift: {Angti}</p>
        </div>
    );
};

export default Special;