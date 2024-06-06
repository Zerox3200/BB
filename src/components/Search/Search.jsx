import React, { useContext, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';
import { NavContext } from '../../Context/NavContext';
import Languages from '../Language/Language';
import axios from 'axios';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

import './Search.scss';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HostLink } from '../Host/Host';

function Search() {
    const { HandleMobileNav } = useContext(NavContext);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const [input, setInput] = useState("");
    const [searchDropList, setSearchDropList] = useState(false);
    const [searchData, setSearchData] = useState([]);

    const handleClose = () => {
        setSearchDropList(false);
    }

    const fetchdData = async (value) => {
        const response = await axios.get(`${HostLink}/app/SearchApp?`, {
            params: {
                name: value
            }
        });
        setSearchData(response.data.result);
        if (response.data.result.length > 0) {
            setSearchDropList(true);
        } else {
            setSearchDropList(false);
        }
        if (value == "") {
            setSearchDropList(false);

        }
    }

    const handleChange = (value) => {
        setInput(value);
        fetchdData(value);
    }

    return (
        <div className={pathname === "/Policy" ? "Intro py-3 row w-100 column-gap-3 align-items-center" : "Intro py-3 px-4 row w-100 column-gap-3 align-items-center"}>
            <MdOutlineMenu onClick={HandleMobileNav} />
            {pathname === "/Policy" ? null : (
                <>
                    <form className="Intro_Search">
                        <label htmlFor="search">
                            <IoSearchOutline />
                        </label>
                        <input type="text" value={input} onChange={(e) => { handleChange(e.target.value) }} className="form-control" id='search' placeholder={t('Search')} />
                        {searchDropList &&
                            <div className="droplist-search-parent">
                                <div className="close">
                                    <IoMdCloseCircleOutline onClick={handleClose} />
                                </div>
                                {searchData.map((ele, index) => (
                                    <div className="searchDropLit" key={ele._id}>
                                        <Link className='d-flex justify-content-between align-items-center' to={`/AppInfo/${ele._id}`}>
                                            <img src={`${HostLink}/${ele.appicon}`} alt="" />
                                            <h5 className='font-color'>
                                                {ele.name[0].value}
                                            </h5>
                                            <FaAngleRight />
                                        </Link>
                                    </div>
                                ))}
                            </div>}
                    </form>
                    <Languages />
                </>
            )}
        </div>
    );
}

export default Search;
