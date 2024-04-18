import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav/SideNav'
import { NavContext } from '../../src/Context/navContext';
import { IoMdMenu } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

export default function Layout() {
    const { ShowMenu, Showing } = useContext(NavContext);

    return <>
        {ShowMenu ? <div className="dropBox ShowDropBox" onClick={Showing}></div> :
            <div className="dropBox HideDropBox"></div>}
        {ShowMenu ? <IoCloseOutline onClick={Showing} className='SideButton' /> :
            <IoMdMenu onClick={Showing} className='SideButton' />}
        <SideNav />
        <Outlet></Outlet>
    </>
}
