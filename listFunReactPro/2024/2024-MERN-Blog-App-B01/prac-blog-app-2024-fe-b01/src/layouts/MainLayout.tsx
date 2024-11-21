import React from 'react'
import NavbarComp from '../components/NavbarComp'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <NavbarComp />
            <Outlet />
        </div>
    </>
  )
}

export default MainLayout