import React from 'react';
import Friend from '../Friend/Friend.jsx';

const Cousin = ({children, hasFriend}) => {
    return (
        <div>
            <h1 className='text-center text-2xl font-semibold'>Cousin</h1>
            <p>{children}</p>
            {hasFriend &&<Friend></Friend>}
        </div>
    );
};

export default Cousin;