import React from 'react'
import { Outlet } from 'react-router-dom'
import DashSideNav from '../components/DashSideNav/DashSideNav'

export default function AdminLayout() {
  return <>
    <DashSideNav />
    <Outlet></Outlet>
  </>
}
