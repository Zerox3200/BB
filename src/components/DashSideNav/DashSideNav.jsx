import React from 'react'
import './DashSideNav.scss';
import Logo from '../../Assets/Images/_combo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdApps } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';

export default function DashSideNav() {
    const { pathname } = useLocation();
    let Navigate = useNavigate()

    let logout = async () => {
        let token = localStorage.getItem("token")
        let logedout = await axios.post('http://localhost:3000/auth/logout', {
            headers: { 'token': `${token}` }
        });
        console.log(logedout)
        if (logedout) {
            Navigate('/')
            localStorage.removeItem("token");
        }
    }
    return <>
        <div className="main-dashsidenav">
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
                    <span onClick={logout}>Logout</span>
                </div>
            </aside>}
        </div>

    </>
}
