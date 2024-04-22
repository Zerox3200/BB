import React, { useContext } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import './Search.scss'
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { NavContext } from '../../Context/NavContext';

export default function Search() {
    const { MobileNavShow, HandleMobileNav } = useContext(NavContext);


    return <div className='Intro py-3 px-4 d-flex column-gap-3'>
        {MobileNavShow ? <MdOutlineMenu onClick={() => HandleMobileNav()} /> : <IoClose onClick={() => HandleMobileNav()} />}
        <div className="Intro_Search">
            <input type="text" className='form-control' />
            <IoSearchOutline />
        </div>
    </div>
}
