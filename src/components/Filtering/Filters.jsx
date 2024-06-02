import React, { useState } from 'react'
import './Filters.scss';
import AppCard from '../card/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { motion, AnimatePresence } from 'framer-motion'
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Empty from '../Empty/Empty';

export default function Filters() {
    const [Category, setCategory] = useState('All');
    const [Paid, setPaid] = useState("All");
    const { t } = useTranslation();
    const [Apps, setApps] = useState([]);

    const CATEGORIES_URL = "http://localhost:3000/Categories/GetAllCats";
    const APPS_URL = "http://localhost:3000/app/GetAllApps";


    const MainLanguage = reactLocalStorage.get('lan');

    const GetAllCategories = () => {
        return axios.get(CATEGORIES_URL)
    }

    const { data: GetCategories, isLoading } = useQuery("Get Categories", GetAllCategories, {
        cacheTime: 5000000
    })

    const GetAllApps = () => {
        return axios.get(APPS_URL)
    }

    const { data: TotalApps, isLoading: TotalAppsLoading } = useQuery("Get All Apps", GetAllApps, {
        cacheTime: 5000000,
        onSuccess: (data) => {
            setApps(data?.data.result)
        }
    })


    const FilterButtons = (Filter) => {
        setCategory(Filter);
    }

    const FreeOrPaidButtons = (Filter) => {
        setPaid(Filter);
    }

    const AppsFilters = (Type) => {
        if (Type === "All") {
            setApps(TotalApps?.data.result);
            return;
        };

        if (Paid === "Free") {
            const FilteredDataWithFree = TotalApps?.data.result.filter((App) => {
                return App.appcat.en === Type && App.paid === true;
            })

            setApps(FilteredDataWithFree);
            return;
        }

        if (Paid === "Paid") {
            const FilteredDataWithPaid = TotalApps?.data.result.filter((App) => {
                return App.appcat.en === Type && App.paid === false;
            })

            setApps(FilteredDataWithPaid);
            return;
        }

        const FilteredData = TotalApps?.data.result.filter((App) => {
            return App.appcat.en === Type;
        })
        setApps(FilteredData);
    }


    const PaidFilter = (Free, FreeTruthly) => {
        if (Free === 'All') {
            if (Category === "All") {
                setApps(TotalApps?.data.result);
                return;
            }
            const FilterPaid = TotalApps?.data.result.filter((PaidElement) => {
                return PaidElement.appcat.en === Category;
            })
            setApps(FilterPaid);
            return;
        }

        if (Category !== 'All') {
            const FilterPaid = TotalApps?.data.result.filter((PaidElement) => {
                return PaidElement.paid === FreeTruthly && PaidElement.appcat.en === Category;
            })
            setApps(FilterPaid);
            return;
        }

        const FilterPaidAll = TotalApps?.data.result.filter((PaidElement) => {
            return PaidElement.paid === FreeTruthly;
        })
        setApps(FilterPaidAll);
        return;
    }

    const getAppTitle = (app, language) => {
        switch (language) {
            case 'ar':
                return app.name[1].value;
            case 'tr':
                return app.name[2].value;
            case 'ur':
                return app.name[3].value;
            default:
                return app.name[0].value;
        }
    };

    const getDesc = (app, language) => {
        switch (language) {
            case 'ar':
                return app.description[1].value;
            case 'tr':
                return app.description[2].value;
            case 'ur':
                return app.description[3].value;
            default:
                return app.description[0].value;
        }
    }

    const GetCat = (Cat, language) => {
        switch (language) {
            case 'ar':
                return Cat.name.ar;
            case 'tr':
                return Cat.name.tr;
            case 'ur':
                return Cat.name.ur;
            default:
                return Cat.name.en;
        }
    }

    return <>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 0.6 }}
            className={MainLanguage === 'ar' || MainLanguage === 'ur' ? "FilterButtons row align-items-center px-4 Right"
                : "FilterButtons row  align-items-center px-4"}>
            <h1 className={'h5 col-xl-1 col-lg-12 col-md-8 col-sm-8 d-flex'}>{t("Categories")}:</h1>
            <div className="row mx-1 col-xl-10 col-lg-12 col-md-10">
                <button type="button"
                    onClick={() => {
                        FilterButtons("All");
                        AppsFilters("All");
                    }} className={Category === "All" ? 'btn mx-2 my-1 All Active' : 'All btn mx-2 my-1'}>
                    {t("All")}</button>
                {isLoading ? <Loading /> : GetCategories?.data.result.map(Cat =>
                    <button key={Cat._id} type="button"
                        onClick={() => {
                            FilterButtons(Cat.name.en);
                            AppsFilters(Cat.name.en);
                        }} className={Category === Cat.name.en ?
                            'btn mx-2 my-1 d-flex justify-content-center align-items-center column-gap 3 Active'
                            : 'btn mx-2 my-1 d-flex justify-content-center align-items-center column-gap 3'}>
                        <img alt='...' src={`http://localhost:3000/${Cat.Icon}`} />  {GetCat(Cat, MainLanguage)}</button>
                )
                }
            </div>
        </motion.section>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 0.6 }}
            className={MainLanguage === 'ar' || MainLanguage === 'ur' ? "FilterButtonsPrice row align-items-center px-4 mt-3 Right"
                : "FilterButtonsPrice row align-items-center px-4 mt-3"} >
            <h1 className='h5 col-xl-1 col-lg-12 col-md-8 col-sm-8 d-flex'>{t("Price")}:</h1>
            <div className="row mx-1 col-xl-10 col-lg-12 col-md-10 ">
                <button onClick={() => {
                    FreeOrPaidButtons('All');
                    PaidFilter('All', null)
                }}
                    type="button" className={Paid === 'All' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{t("All")}</button>
                <button onClick={() => {
                    FreeOrPaidButtons('Free');
                    PaidFilter('Free', true)
                }}
                    type="button" className={Paid === 'Free' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{t("Free")}</button>
                <button onClick={() => {
                    FreeOrPaidButtons('Paid');
                    PaidFilter("Paid", false)
                }}
                    type="button" className={Paid === 'Paid' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{t("Paid")}</button>
            </div>
        </motion.section>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
            className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                "container FilteredApps mt-5 row justify-content-center column-gap-3 mx-auto Right" :
                "container FilteredApps mt-5 row justify-content-center column-gap-3 mx-auto"}>
            <div className="FilteredApps_Title">
                <h1 className='h4'><Link to='/'>{t('Home')}</Link> / {t("AppStore")}</h1>
            </div>
            <div className="row">
                <AnimatePresence>
                    {TotalAppsLoading ? <Loading /> : Apps.map((App) => {
                        return (
                            <div className="cardparent col-md-4 col-sm-12 my-2">
                                <AppCard key={App._id} Title={getAppTitle(App, MainLanguage)} Desc={getDesc(App, MainLanguage)}
                                    Cover={App.appcover} Icon={App.appicon} Free={App.paid} AppId={App._id} />
                            </div>
                        )
                    })}
                </AnimatePresence>
            </div>
        </motion.section>
    </>
}