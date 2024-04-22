import React from 'react'
import "./productsinfo.scss"
import Search from '../../components/Search/Search'
import { Link } from 'react-router-dom'
export default function Productsinfo() {
    return (
        <div className="prod-info">
            <Search />
            <div className="prod-main-con">
                <Link to={"/"}> Home /</Link>
                <Link to={"/Apps"}> App store /</Link>
                <Link to={"/Apps"}> Quran /</Link>
                <Link className='link-style' to={"/"}> Tajweed App</Link>
            </div>
        </div>
    )
}
