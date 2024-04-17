import React from 'react'
import './card.scss';
import App from './clay-banks-om_K0istrAg-unsplash.jpg'

export default function AppCard() {
    return <div className="card  p-0">
        <img src={App} className="card-img-top w-100" alt="..." loading='lazy' />
        <div className="card-body d-flex flex-wrap justify-content-between align-content-center py-2">
            <img src={App} alt="..." loading='lazy' className='col-md-5 col-sm-3' />
            <div className="card-body-details col-md-7 col-sm-9 h-100">
                <div className="d-flex justify-content-between align-content-center px-1">
                    <h1 className='h6'>Tajweed</h1>
                    <span>Free</span>
                </div>
                <p className='m-0 px-1'>Learn to identify and understand the explanation behind Tajweed concepts</p>
            </div>
        </div>
    </div>
}
