import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav/SideNav'
import { NavContext } from '../Context/NavContext'
import MobileNav from '../components/MobileNav/MobileNav';

export default function Layout() {

    const { MobileNavShow, HandleMobileNav } = useContext(NavContext);

    return <>
        {MobileNavShow ? <div className="DropBox"></div> : <div className="DropBox Showing" onClick={() => HandleMobileNav()}></div>}
        <MobileNav />
        <SideNav />
        <Outlet></Outlet>
    </>
}
