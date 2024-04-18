import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import './Search.scss'

export default function Search() {
    return <div className='Intro p-3 d-flex justify-content-between'>
        <div className="Intro_Search">
            <input type="text" className='form-control' />
            <IoSearchOutline />
        </div>
    </div>
}
