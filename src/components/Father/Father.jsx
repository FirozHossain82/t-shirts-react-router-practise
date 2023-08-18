import React from 'react';
import MySelf from '../MySelf/MySelf.jsx';
import Sister from '../Sister/Sister.jsx';
import Brother from '../Brother/Brother.jsx';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;<h2>Father</h2>