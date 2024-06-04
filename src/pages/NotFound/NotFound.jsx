import React from 'react'
import './NotFound.scss'
import ErrorImage from '../../Assets/Images/4351528-removebg-preview.png'

export default function NotFound() {
    return (
        <div className='NotFound'>
            <img src={ErrorImage} alt="..." loading='lazy' />
            <h1 className='h5 font-color'><b>Error  </b>This page not aviliable !?</h1>
        </div>
    )
}
