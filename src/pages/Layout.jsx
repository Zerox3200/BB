import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav/SideNav'
import NavProvider from '../Context/NavContext'

export default function Layout() {

    return <>
        <NavProvider>
            <SideNav />
            <Outlet></Outlet>
        </NavProvider>
    </>
}
