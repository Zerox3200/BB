import React, { useContext } from 'react';
import './DashSideNav.scss';
import Logo from '../../Assets/Images/combo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdApps } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { UserContext } from '../../Context/UserContext';
import { NavContext } from '../../Context/NavContext';
import { IoClose } from "react-icons/io5";
import { HostLink } from '../Host/Host';

export default function DashSideNav() {
    const { pathname } = useLocation();
    const { UserInformation } = useContext(UserContext);
    const { DashSideNav, ShowDashNav } = useContext(NavContext);

    let Navigate = useNavigate()

    let logout = async () => {
        let token = localStorage.getItem("token")
        let logedout = await axios.post(`${HostLink}/auth/logout`, {
            headers: { 'token': `${token}` }
        });
        console.log(logedout)
        if (logedout) {
            Navigate('/')
            localStorage.removeItem("token");
        }
    }


    return <>
        <div className={DashSideNav ? "DashNavDropBox" : "DashNavDropBox hide"}>
            <IoClose onClick={() => ShowDashNav()} />
        </div>
        <div className="main-dashsidenav">
            {pathname === "/Login2030" ? null : <aside className={DashSideNav ? 'DashSideNav py-2 px-2' :
                'DashSideNav py-2 px-2 DashSideNav_close'}>

                <img src={Logo} alt="..." loading='lazy' />
                <ul className="Links w-100 d-flex flex-column row-gap-2 list-unstyled mt-3">
                    <li className={pathname === "/DashApps2030" ? "Active" : ""}>
                        <Link onClick={() => ShowDashNav()}
                            to='/DashApps2030' className='d-flex align-items-center column-gap-2'><MdApps /> Apps</Link>
                    </li>
                    <li className={pathname === "/Categories" ? "Active" : ""}>
                        <Link onClick={() => ShowDashNav()}
                            to='/Categories' className='d-flex align-items-center column-gap-2'>
                            <BiSolidCategoryAlt />Categories</Link>
                    </li>
                    {UserInformation.role === "Owner" ? <li className={pathname === "/Admins" ? "Active" : ""}>
                        <Link onClick={() => ShowDashNav()}
                            to='/Admins' className='d-flex align-items-center column-gap-2'><BsPersonFill />Admins</Link>
                    </li> : null}



                </ul>

                <div className="Logout w-100 d-flex column-gap-2 align-items-center">
                    <TbLogout2 />
                    <span onClick={logout}>Logout</span>
                </div>
            </aside>}
        </div>

    </>
}
