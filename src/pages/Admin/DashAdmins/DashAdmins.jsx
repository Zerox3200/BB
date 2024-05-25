import React from 'react'
import './DashAmin.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function DashAdmins() {
    const { pathname } = useLocation();
    return <>
        <div className='AdminControl'>
            <nav className='d-flex flex-wrap justify-content-evenly align-items-center'>
                <Link to='' className={pathname === "/Admins" ? "Active" : ""}>Add Admin</Link>
                <Link to='DeleteAdmin' className={pathname === "/Admins/DeleteAdmin" ? "Active" : ""}>Delete Admin</Link>
            </nav>
        </div>
        <Outlet></Outlet>
    </>
}
