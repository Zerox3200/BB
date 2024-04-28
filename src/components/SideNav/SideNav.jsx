import React, { useContext, useState } from 'react'
import './SideNav.scss';
import Logo from '../../Assets/Images/_icon.png';
import LogoDesc from '../../Assets/Images/_wormark.png'
import { Link, useLocation } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { NavContext } from '../../Context/NavContext';
import { MdOutlinePolicy } from "react-icons/md";

export default function SideNav() {
    const { pathname } = useLocation();
    const [Rotate, setRotate] = useState(true);
    const { setMargin, margin } = useContext(NavContext);

    const Rotating = () => {
        setRotate(Rotate => !Rotate);
        setMargin(Rotate ? false : true);
    }

    return <>
        <aside className={margin ? 'p-3 NavBigger' : 'p-3 NavSmall'}>

            <div className="position-relative">
                <div className="nav_Title w-100 d-flex align-items-center">
                    <FaChevronRight className={Rotate ? 'Rotate' : null} onClick={() => Rotating()} />
                    <img src={Logo} alt="..." loading='lazy' />
                    <img src={LogoDesc} alt="..." loading='lazy' />
                </div>
            </div>

            <div className="Menu_Bar d-flex flex-column">

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

        </aside>
    </>
}
