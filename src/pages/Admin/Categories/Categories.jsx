import React from 'react';
import './Categories.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Categories() {
    const { pathname } = useLocation();

    return <div className='CategoriesController'>
        <nav className='d-flex flex-wrap justify-content-evenly align-items-center py-1'>
            <Link to='' className={pathname === "/Categories" ? "Active" : ""}>Add Category</Link>
            <Link to='DeleteCategories' className={pathname === "/Categories/DeleteCategories" ? "Active" : ""}>
                Delete Category
            </Link>
            <Link to="UpdateCategories" className={pathname === "/Categories/UpdateCategories" ? "Active" : ""}>
                Update Category
            </Link>
        </nav>
        <Outlet></Outlet>
    </div>
}
