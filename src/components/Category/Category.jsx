import React from 'react';
import './Category.scss';

export default function Category({ Image }) {
    return <>
        <div className="category">
            <img
                src={`http://localhost:3000/${Image}`}
                alt="..." />
        </div>
    </>
}
