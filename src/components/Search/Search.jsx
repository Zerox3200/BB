import React, { useContext, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';
import { NavContext } from '../../Context/NavContext';
import Languages from '../Language/Language';

import './Search.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import axios from 'axios';
import { useQuery } from 'react-query';

function Search() {
    const { HandleMobileNav } = useContext(NavContext);
    const { pathname } = useLocation();
    const { t } = useTranslation();
    // const [notFound, setNotFound] = useState(false);
    const [SuggestedApps, setSuggestedApps] = useState([]);

    const navigate = useNavigate();

    const Searching = async (values) => {
        console.log('Search');
        await axios.get("http://localhost:3000/app/SearchApp", {
            params: {
                name: values.App
            }
        }).then((res) => {
            if (res.data.result) {
                navigate(`AppInfo/${res.data.result[0]._id} `);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const Formik = useFormik({
        initialValues: {
            App: ""
        }, onSubmit: Searching
    })

    const AllNames = () => {
        return axios.get("http://localhost:3000/app/GetAppsName")
    }

    useQuery("Apps Name", AllNames, {
        cacheTime: 4000000,
        onSuccess: (data) => {
            setSuggestedApps(data)
        }
    })


    useEffect(() => {

    }, [pathname])


    return (
        <div className={pathname === "/Policy" ? "Intro py-3 row w-100 column-gap-3 align-items-center" : "Intro py-3 px-4 row w-100 column-gap-3 align-items-center"}>
            <MdOutlineMenu onClick={HandleMobileNav} />
            {pathname === "/Policy" ? null : <>
                <form className="Intro_Search" onSubmit={Formik.handleSubmit}>
                    <label htmlFor="search">
                        <IoSearchOutline onClick={() => {
                            if (Formik.values.App) {
                                Searching(Formik.values)
                            } else {
                                return;
                            }
                        }} />
                    </label>
                    <input type="text" className="form-control" id='search' placeholder={t('Search')} name='App'
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </form>
                <Languages />
            </>
            }
        </div>
    );
};

export default Search;