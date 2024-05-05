import React, { useContext, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';
import { NavContext } from '../../Context/NavContext';
import Languages from '../Language/Language';

import './Search.scss';
import { useLocation } from 'react-router-dom';

function Search() {
    const { HandleMobileNav } = useContext(NavContext);
    const { pathname } = useLocation();

    useEffect(() => {

    }, [pathname])


    return (
        <div className={pathname === "/Policy" ? "Intro py-3 row w-100 column-gap-3 align-items-center" : "Intro py-3 px-4 row w-100 column-gap-3 align-items-center"}>
            <MdOutlineMenu onClick={HandleMobileNav} />
            {pathname === "/Policy" ? null : <>
                <form className="Intro_Search">
                    <label htmlFor="search">
                        <IoSearchOutline />
                    </label>
                    <input type="text" className="form-control" id='search' placeholder='Search' />
                </form>
                <Languages />
            </>
            }
        </div>
    );
};

export default Search;