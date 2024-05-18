import React from 'react'
import './DashApps.scss'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function DashApps() {
    const { pathname } = useLocation();

    return <div className='AppControl'>

        <nav className='d-flex flex-wrap justify-content-evenly align-items-center py-1'>
            <Link to='' className={pathname === "/DashApps2030" ? "Active" : ""}>Add App</Link>
            <Link to='DeleteApp' className={pathname === "/DashApps2030/DeleteApp" ? "Active" : ""}>
                Delete App
            </Link>
            <Link to="UpdateAppImage" className={pathname === "/DashApps2030/UpdateAppImage" ? "Active" : ""}>
                Update App images
            </Link>
            <Link to="UpdateAppText" className={pathname === "/DashApps2030/UpdateAppText" ? "Active" : ""}>
                Update App
            </Link>
        </nav>
        <Outlet></Outlet>
    </div>
}
