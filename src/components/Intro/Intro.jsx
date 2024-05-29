import React, { useRef } from 'react'
import './Intro.scss'
import { Link } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import AppCard from '../card/card';
import Category from '../Category/Category';
import Search from '../Search/Search';
import { useTranslation } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { motion, useInView } from 'framer-motion';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Empty from '../Empty/Empty';

export default function Intro() {
    const { t } = useTranslation();
    const Cat = useRef()
    const Inview = useInView(Cat, { once: true });
    const MainLanguage = reactLocalStorage.get('lan');

    const IntroCategoriesLink = "http://localhost:3000/Categories/IntroCats";
    const IntroAppsLink = "http://localhost:3000/app/getlatestApp";

    const GetIntroCats = () => {
        return axios.get(IntroCategoriesLink)
    }

    const GetLatesApps = () => {
        return axios.get(IntroAppsLink)
    }

    const { data: IntoCategories, isLoading: IntoCategoriesLaoding } = useQuery('Intro Categories', GetIntroCats,
        {
            cacheTime: 5000000
        });

    const { data: LatestApps, isLoading: LatestAppsLoading } = useQuery("Latest Apps", GetLatesApps, {
        cacheTime: 5000000
    })

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

    console.log(LatestApps?.data.result);
    return <>
        <Search />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, type: 'spring' }} className="Intro_Text mt-3 d-flex flex-wrap align-items-center py-5 px-2 col-xl-11 col-sm-12">
            {/* <img src={Icon} alt="..." loading='lazy' /> */}
            <article className='p-4 col-md-9'>
                <h1 className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'h3 fw-bold Right' : 'h3 fw-bold'}>{t("IntroTitle")}</h1>
                <p className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'h-5 Right' : 'h-5'}>{t("Intro1")}</p>
                <p className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'Right' : ''}>{t("Intro2")}.</p>
            </article>
        </motion.div>
        <div className="container Intro_Apps row w-100 justify-content-center px-3">
            <motion.div className="Intro_Apps_inside d-flex flex-column align-items-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, type: 'spring' }} >

                <div className="Intro_Apps_inside_cards row w-100 px-1 justify-content-evenly">
                    <div className="col-12 d-flex flex-column px-2 pe-4">

                        <h1 className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'title h3 align-self-end Right' : 'title h3 align-self-start'}>{t("LastApps")}</h1>

                        <Link to='/Apps' className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                            'd-flex justify-content-start align-items-center fs-5 align-self-start Right mb-4' :
                            'd-flex justify-content-end align-items-center fs-5 align-self-end mb-4'}>
                            {t("LastAppsViewAll")}{MainLanguage === 'ar' || MainLanguage === 'ur' ? <LuChevronLeft className='mt-2 fs-5' />
                                : <LuChevronRight />}</Link>
                    </div>
                    {LatestAppsLoading ? <Loading /> : LatestApps?.data?.message === "No apps found" ? <Empty />
                        : LatestApps?.data?.result?.map((App) =>
                            <AppCard key={App._id} Free={App.paid}
                                Cover={App.appcover} Title={getAppTitle(App, MainLanguage)}
                                Desc={getDesc(App, MainLanguage)} Icon={App.appicon}
                                AppId={App._id} />)}
                </div>
            </motion.div>

            <motion.div className="Intro_Categories d-flex flex-column justify-content-center my-5 pb-5"
                initial={{ opacity: 0 }} animate={Inview && { opacity: 1 }} transition={{ duration: 2, type: 'spring' }}>
                <div className="Intro_Categories_cards d-flex flex-wrap justify-content-lg-evenly justify-content-sm-start">
                    <div className="col-12 d-flex flex-column  px-2 pe-4" ref={Cat}>

                        <h1 className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'title h3 mt-4 Right align-self-end' : 'title h3 mt-4'}>{t("BrowserByCategory")}</h1>

                        <Link to='/Apps' className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                            'd-flex justify-content-start align-items-center fs-5 align-self-start Right' :
                            'd-flex justify-content-end align-items-center fs-5 align-self-end'}>
                            {t("LastAppsViewAll")}{MainLanguage === 'ar' || MainLanguage === 'ur' ? <LuChevronLeft className='mt-2 fs-5' />
                                : <LuChevronRight />}</Link>

                    </div>
                    {IntoCategoriesLaoding ? <Loading /> : IntoCategories?.data?.result?.length === 0 ?
                        <h1 className='font-color'>No Categories</h1> : IntoCategories?.data?.result?.map((Cat, index) =>
                            <Category key={index} Image={Cat.Icon} />)}

                </div>
            </motion.div>
        </div>
    </>
}
