import React, { useContext } from 'react'
import './MobileNav.scss';
import Logo from '../../Assets/Images/icon.png';
import LogoDesc from '../../Assets/Images/wormark.png'
import { Link, useLocation } from 'react-router-dom';
import { ImHome, ImYoutube } from "react-icons/im";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { NavContext } from '../../Context/NavContext';
import { IoClose } from "react-icons/io5";
import { MdOutlinePolicy } from 'react-icons/md';
import { IoLogoFacebook } from 'react-icons/io';

export default function MobileNav() {
    const { pathname } = useLocation();
    const { MobileNavShow, HandleMobileNav } = useContext(NavContext);

    const handleLinkClick = () => {
        HandleMobileNav();
    };

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
                            <Link to='/' className='d-flex align-items-center' onClick={() => handleLinkClick()}>
                                <ImHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={pathname === '/Apps' ? 'Active' : null} onClick={() => handleLinkClick()}>
                            <Link to='/Apps' className='d-flex align-items-center'>
                                <AiOutlineAppstoreAdd />
                                <span>Apps</span>
                            </Link>
                        </li>
                        <li className={pathname === '/ContactUs' ? 'Active' : null} onClick={() => handleLinkClick()}>
                            <Link to='ContactUs' className='d-flex align-items-center'>
                                <FaMessage />
                                <span style={{ textWrap: 'nowrap' }}>Contact Us</span>
                            </Link>
                        </li>
                        <li className={pathname === '/Policy' ? 'Active' : null} onClick={() => handleLinkClick()}>
                            <Link className='d-flex align-items-center' to={'/Policy'}>
                                <MdOutlinePolicy />
                                <span style={{ textWrap: 'nowrap' }}>Policy</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Icons d-flex w-100 ps-2 column-gap-1 position-absolute" style={{ bottom: "50px" }}>
                <a href="https://www.google.com/?hl=ar" aria-label="Facebook">
                    <IoLogoFacebook className='fs-4' />
                </a>
                <a href="https://www.google.com/?hl=ar" aria-label="Youtube">
                    <ImYoutube className='fs-4' />
                </a>
            </div>
        </nav>
    </>
}
