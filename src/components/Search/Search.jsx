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
            <div className="Intro_Search">
                <input type="text" className="form-control" id='search' />
                <label htmlFor="search">
                    <IoSearchOutline />
                </label>
            </div>

            <Languages />
        </div>
    );
};

export default Search;
