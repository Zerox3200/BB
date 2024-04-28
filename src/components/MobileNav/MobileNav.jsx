import React, { useContext } from 'react'
import './MobileNav.scss';
import Logo from '../../Assets/Images/_icon.png';
import LogoDesc from '../../Assets/Images/_wormark.png'
import { Link, useLocation } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { NavContext } from '../../Context/NavContext';
import { IoClose } from "react-icons/io5";
import { MdOutlinePolicy } from 'react-icons/md';

export default function MobileNav() {
    const { pathname } = useLocation();
    const { MobileNavShow, HandleMobileNav } = useContext(NavContext);

    return <>
        <nav className={MobileNavShow ? 'MobileNav px-3 py-5' : 'MobileNav px-3 py-5 Show'} >
            <IoClose className='font-color' onClick={() => HandleMobileNav()} />
            <div className="position-relative">
                <div className="nav_Title w-100 d-flex align-items-center">
                    <img src={Logo} alt="..." loading='lazy' />
                    <img src={LogoDesc} alt="..." loading='lazy' />
                </div>
            </div>
            <div className="Menu_Bar">
                <div className="menu">
                    <ul className='list-unstyled mt-3'>
                        <li className={pathname === '/' ? 'Active' : null}>
                            <Link to='/' className='d-flex align-items-center'>
                                <ImHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={pathname === '/Apps' ? 'Active' : null}>
                            <Link to='/Apps' className='d-flex align-items-center'>
                                <AiOutlineAppstoreAdd />
                                <span>Apps</span>
                            </Link>
                        </li>
                        <li className={pathname === '/ContactUs' ? 'Active' : null}>
                            <Link to='ContactUs' className='d-flex align-items-center'>
                                <FaMessage />
                                <span style={{ textWrap: 'nowrap' }}>Contact Us</span>
                            </Link>
                        </li>
                        <li className={pathname === '/Policy' ? 'Active' : null}>
                            <Link className='d-flex align-items-center' to={'/Policy'}>
                                <MdOutlinePolicy />
                                <span style={{ textWrap: 'nowrap' }}>Policy</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
