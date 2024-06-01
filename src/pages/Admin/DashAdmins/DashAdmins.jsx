import React, { useContext } from 'react'
import './../Navs.scss'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { NavContext } from '../../../Context/NavContext';
import { IoMenu } from "react-icons/io5";

export default function DashAdmins() {
    const { pathname } = useLocation();
    const { ShowDashNav } = useContext(NavContext);
    return <>
        <div className='Control'>
            <nav className='d-flex flex-wrap justify-content-evenly align-items-center'>
                <IoMenu onClick={() => ShowDashNav()} />
                <Link to='' className={pathname === "/Admins" ? "Active Links" : " Links"}>Add Admin</Link>
                <Link to='DeleteAdmin' className={pathname === "/Admins/DeleteAdmin" ? "Active Links" : " Links"}>Delete Admin</Link>
                <div className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Controlles
                    </div>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="">Add Admin</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="DeleteAdmin"> Delete Admin</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                    </ul>
                </div>
            </nav>

        </div>
        <Outlet></Outlet>
    </>
}
