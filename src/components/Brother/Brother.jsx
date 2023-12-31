import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa.jsx';

const Brother = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;