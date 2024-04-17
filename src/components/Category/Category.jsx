import React from 'react';
import './Category.scss';
import Cat from './../../Assets/Images/Icons/x1024/Du_ā.svg'

export default function Category() {
    return <>
        <div className="category ">
            <img src={Cat} alt="..." loading='lazy' />
        </div>
    </>
}
