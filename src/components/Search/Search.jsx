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

function Search() {
    const { HandleMobileNav } = useContext(NavContext);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const [input, setinput] = useState("")

    const [searchDropList, setsearchDropList] = useState(false)

    const [SearchData, setSearchData] = useState([])

    const handleClose = () => {
        setsearchDropList(false)
    }

    const fetchdData = async (vlaue) => {
        const response = await axios.get('http://localhost:3000/app/SearchApp?', {
            params: {
                name: vlaue
            }
        });
        setSearchData(response.data.result)

        if (SearchData.length > 0) {
            console.log(SearchData);
            setsearchDropList(true)
        };
        if (vlaue == "") {
            setsearchDropList(false)

        }

    }

    const handlechange = (value) => {
        setinput(value)
        fetchdData(value)
    }

    useEffect(() => {

    }, [pathname])


    return (
        <>
            <div className={pathname === "/Policy" ? "Intro py-3 row w-100 column-gap-3 align-items-center" : "Intro py-3 px-4 row w-100 column-gap-3 align-items-center"}>
                <MdOutlineMenu onClick={HandleMobileNav} />
                {pathname === "/Policy" ? null : <>
                    <form className="Intro_Search">
                        <label htmlFor="search">
                            <IoSearchOutline />
                        </label>
                        <input type="text" value={input} onChange={(e) => { handlechange(e.target.value) }} className="form-control" id='search' placeholder={t('Search')} />
                        {searchDropList ?
                            <div className="droplist-search-parent">
                                <div className="close">
                                    <IoMdCloseCircleOutline onClick={handleClose} />
                                </div>
                                {
                                    SearchData.map((ele) => {
                                        return (
                                            <div className="searchDropLit" key={ele._id} >
                                                <Link className='d-flex justify-content-between align-items-center' to={`/AppInfo/${ele._id}`}>
                                                    <img src={`http://localhost:3000/${ele.appicon}`} alt="" />
                                                    <h5 className='font-color'>
                                                        {ele.name[0].value}
                                                    </h5>
                                                    <FaAngleRight />
                                                </Link>
                                            </div >
                                        )
                                    })
                                }
                            </div> : null}
                    </form>
                    <Languages />
                </>
                }

            </div>
        </>
    );
};

export default Search;