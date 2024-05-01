import React, { useContext } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';
import { NavContext } from '../../Context/NavContext';
import Languages from '../Language/Language';

import './Search.scss';

function Search() {
    const { HandleMobileNav } = useContext(NavContext);


    return (
        <div className="Intro py-3 px-4 row w-100 column-gap-3 align-items-center">
            <MdOutlineMenu onClick={HandleMobileNav} />
            <form className="Intro_Search">
                <label htmlFor="search">
                    <IoSearchOutline />
                </label>
                <input type="text" className="form-control" id='search' />
            </form>

            <Languages />
        </div>
    );
};

export default Search;
