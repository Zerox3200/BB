import React from 'react'
import EmptyImage from '../../Assets/Images/4351528-removebg-preview.png'

export default function Empty() {
    return <div className="Empty">
        <img src={EmptyImage} alt="..." loading='lazy' />
        <h1 className='h4 font-color'>Empty Data!!</h1>
    </div>
}
