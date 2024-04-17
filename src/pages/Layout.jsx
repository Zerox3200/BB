import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav/SideNav'
import { NavContext } from '../../src/Context/navContext';

export default function Layout() {
    const { ShowMenu, Showing } = useContext(NavContext);

    return <>
        {ShowMenu ? <div className="dropBox ShowDropBox" onClick={Showing}></div> : <div className="dropBox HideDropBox"></div>}
        <SideNav />
        <Outlet></Outlet>
    </>
}
