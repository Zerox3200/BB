import React from 'react'
import './card.scss';
import AppIcon from '../../Assets/Images/online-internet-symbol-icon.jpg';
import MainApp from '../../Assets/Images/people-holding-pinterest-icon.jpg';

export default function AppCard({ Free }) {

    return <div className="card p-0">
        <img src={MainApp} className="card-img-top mx-auto" alt="..." loading='lazy' />
        <div className="card-body d-flex justify-content-between align-items-center py-1">

            <img src={AppIcon} alt="..." loading='lazy' className='col-md-4 ' />

            <div className="card-body-details col-md-8 h-100 mt-2 ">

                <div className="d-flex justify-content-between align-content-center px-1">
                    <h1 className='h6 px-2'>Tajweed</h1>
                    {Free ? <span className='Price'>Free</span> : null}
                </div>

                <p className='m-0 px-2'>Learn to identify and understand the explanation behind Tajweed concepts</p>
            </div>

        </div>

    </div>
}
