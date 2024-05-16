import React from 'react'
import './DashAmin.scss';
import { Link, Outlet } from 'react-router-dom';

export default function DashAdmins() {
    return <div className='AdminControl'>
        <nav className='d-flex flex-wrap justify-content-evenly align-items-center'>
            <Link to=''>Add Admin</Link>
            <Link to='DeleteAdmin'>Delete Admin</Link>
        </nav>
        <Outlet></Outlet>
    </div>
}
