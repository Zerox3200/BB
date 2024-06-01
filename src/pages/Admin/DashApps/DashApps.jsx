import React, { useContext } from 'react'
import './../Navs.scss'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { NavContext } from '../../../Context/NavContext';
import { IoMenu } from "react-icons/io5";

export default function DashApps() {
    const { pathname } = useLocation();
    const { ShowDashNav } = useContext(NavContext);

    return <div className='Control'>

        <nav className='d-flex flex-wrap justify-content-evenly align-items-center py-1'>
            <IoMenu onClick={() => ShowDashNav()} />
            <Link to='' className={pathname === "/DashApps2030" ? "Active Links" : "Links"}>Add App</Link>
            <Link to='DeleteApp' className={pathname === "/DashApps2030/DeleteApp" ? "Active Links" : "Links"}>
                Delete App
            </Link>
            <Link to="UpdateAppImage" className={pathname === "/DashApps2030/UpdateAppImage" ? "Active Links" : "Links"}>
                Update App images
            </Link>
            <Link to="UpdateAppText" className={pathname === "/DashApps2030/UpdateAppText" ? "Active Links" : "Links"}>
                Update App
            </Link>
            <div className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Controlles
                </div>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="">Add App</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="DeleteApp"> Delete App</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="UpdateAppImage">Update App images</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="UpdateAppText">Update App</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet></Outlet>
    </div>
}
