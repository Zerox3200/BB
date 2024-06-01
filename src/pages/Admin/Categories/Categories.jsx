import React, { useContext } from 'react';
import './../Navs.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { NavContext } from '../../../Context/NavContext';
import { IoMenu } from "react-icons/io5";

export default function Categories() {
    const { pathname } = useLocation();
    const { ShowDashNav } = useContext(NavContext);


    return <div className='Control'>
        <nav className='d-flex flex-wrap justify-content-evenly align-items-center py-1'>
            <IoMenu onClick={() => ShowDashNav()} />
            <Link to='' className={pathname === "/Categories" ? "Active Links" : "Links"}>Add Category</Link>
            <Link to='DeleteCategories' className={pathname === "/Categories/DeleteCategories" ? "Active Links" : "Links"}>
                Delete Category
            </Link>
            <Link to="UpdateCategories" className={pathname === "/Categories/UpdateCategories" ? "Active Links" : "Links"}>
                Update Category
            </Link>
            <div className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Controlles
                </div>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="">Add Category</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="DeleteCategories"> Delete Category</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="UpdateCategories"> Update Category</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet></Outlet>
    </div>
}
