import React, { useContext } from 'react'
import './SideNav.scss';
import Logo from '../../Assets/Images/_combo.svg'
import { Link, useLocation } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { NavContext } from '../../Context/navContext';

export default function SideNav() {
    const { pathname } = useLocation();
    const { ShowMenu } = useContext(NavContext);
    return <>
        <nav className={ShowMenu ? 'Show' : ''}>
            <img src={Logo} alt="..." loading='lazy' />
            <div className="Nav_Links d-flex flex-column px-3 row-gap-1">
                <Link className={pathname === '/' ? 'Active' : null} to='/'>
                    <ImHome /> Home
                </Link>
                <Link className={pathname === '/Apps' ? 'Active' : null} to='Apps'>
                    <AiOutlineAppstoreAdd /> App Store
                </Link>
                <Link className={pathname === '/contactus' ? 'Active' : null} to='contactus'>
                    <FaMessage /> Contact Us
                </Link>
            </div>
        </nav>
    </>
}
