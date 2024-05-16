import React from 'react'
import './DashSideNav.scss';
import Logo from '../../Assets/Images/_combo.png'
import { Link, useLocation } from 'react-router-dom';
import { MdApps } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";

export default function DashSideNav() {
    const { pathname } = useLocation();
    return <>
        {pathname === "/Login2030" ? null : <aside className='DashSideNav py-2 px-2'>
            <img src={Logo} alt="..." loading='lazy' />
            <ul className="Links w-100 d-flex flex-column row-gap-2 list-unstyled mt-3">
                <li>
                    <Link to='/DashApps2030' className='d-flex align-items-center column-gap-2'><MdApps /> Apps</Link>
                </li>
                <li>
                    <Link to='/Admins' className='d-flex align-items-center column-gap-2'><BsPersonFill />Admins</Link>
                </li>
            </ul>
            <div className="Logout w-100 d-flex column-gap-2 align-items-center">
                <TbLogout2 />
                <span>Logout</span>
            </div>
        </aside>}

    </>
}
