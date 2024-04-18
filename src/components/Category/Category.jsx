import React from 'react';
import './Category.scss';

export default function Category({ Image }) {
    return <>
        <div className="category ">
            <img src={Image} alt="..." loading='lazy' />
        </div>
    </>
}
