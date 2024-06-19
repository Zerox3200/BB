import React, { useContext, useRef, useState } from 'react'
import "./productsinfo.scss"
import Search from '../../components/Search/Search'
import { Link, useParams } from 'react-router-dom'
import { NavContext } from '../../Context/NavContext'
import { FaShareAlt } from "react-icons/fa";
import googleplay from '../../Assets/Images/icons8-google-play.svg'
import MultipleItems from '../../components/Slider/Slider'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import AppCard from '../../components/card/card'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../../components/Loading/Loading'
import { HostLink } from '../../components/Host/Host'

export default function Productsinfo() {
    const { margin } = useContext(NavContext)
    const { t } = useTranslation();
    const Related = useRef();
    const Inview = useInView(Related, { once: true });
    const MainLanguage = reactLocalStorage.get('lan');
    const { AppId } = useParams();
    const [Loader, setLoader] = useState(false);
    const [queryEnabled, setQueryEnabled] = useState(true);


    const GetApp = () => {
        return axios.get(`${HostLink}/app/GetOneApp/${AppId}`)
    }
    const { data: SpeceficApp, isLoading, refetch } = useQuery("Get One App", GetApp, {
        enabled: queryEnabled
    });

    const HandleChangeId = async () => {
        setQueryEnabled(false)
        setLoader(true);
        await refetch();
        setQueryEnabled(true)
        setLoader(false);
    }

    const getAppTitle = (language) => {
        switch (language) {
            case 'ar':
                return name[1].value;
            case 'tr':
                return name[2].value;
            case 'ur':
                return name[3].value;
            default:
                return name[0].value;
        }
    };

    const getAppDesc = (language) => {
        switch (language) {
            case 'ar':
                return description[1].value;
            case 'tr':
                return description[2].value;
            case 'ur':
                return description[3].value;
            default:
                return description[0].value;
        }
    };

    const getAppTitleForCard = (app, language) => {
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
    const getAppDescForCard = (app, language) => {
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
    };

    let { name, paid, size, news, description, appinfo, appslider, appicon, applink } = SpeceficApp?.data.result || {};

    return <>
        {isLoading || Loader ? <Loading /> : <section className={margin ? "prod-info  prod-info-Marined " : "prod-info  prod-info-Constant"} >
            <Search />
            <div className="prod-main-con ps-5 container">

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row Right justify-content-center ' : 'row justify-content-center '}>
                    <div className="col-11 mt-5">
                        <Link to={"/"}>{t('Home')}  /</Link>
                        <Link to={"/Apps"}> {t('AppStore')} /</Link>
                        <Link to={"/Apps"}> {t("quraaninfo")}/</Link>
                        <Link className='link-style' to={"/"}> {t("tajweed")}</Link>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}
                    className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                        'row my-3 justify-content-center Right' : 'row my-3 justify-content-center'}>

                    <img className='col-md-2 app-icon' src={`${HostLink}/${appicon}`} alt="..." loading='lazy' />

                    <div className="col-md-4 app-name font-color">
                        <h1 className='mb-3'>{getAppTitle(MainLanguage)}</h1>
                        {paid && <span className='m-2'>{t("Free")}</span>}
                        <span className='m-2'>{size}</span>
                    </div>

                    <div className="app-link col-md-6">
                        <a className={MainLanguage === 'ar' || MainLanguage === "ur" ? " mt-3" : ""}
                            href={applink} target='_blank' rel="noreferrer">
                            <div className="share-link">
                                <FaShareAlt />
                            </div>
                        </a>

                        <div className={MainLanguage === 'ar' || MainLanguage === "ur" ? "google-play  mt-3" : "google-play  "}>
                            <img src={googleplay} alt="..." loading='lazy' />
                            <span>
                                <span>{t("GetItOn")}</span>
                                <span>google play</span>
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, type: "spring" }} className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row Main_height gap-3 justify-content-center  Right' : 'row Main_height gap-3 justify-content-center '}>
                    <div className="app-slider col-lg-7 col-md-12 h-100 d-flex align-items-center">
                        <MultipleItems SliderImages={appslider}></MultipleItems>
                    </div>
                    <div className="new col-lg-4 col-md-12 h-100">
                        <h2 className='font-color'>{t("WhatsNew")}</h2>
                        <ul className='font-color'>
                            {MainLanguage === "ar" ? news.ar.map((News, index) => <li key={index}>{News}</li>) :
                                MainLanguage === "tr" ? news.tr.map((News, index) => <li key={index}>{News}</li>) :
                                    MainLanguage === "ur" ? news.ur.map((News, index) => <li key={index}>{News}</li>) :
                                        news.en.map((News, index) => <li key={index}>{News}</li>)}
                        </ul>
                    </div>
                </motion.div>


                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, type: "spring", delay: 0.3 }} className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row  gap-3 my-3  justify-content-center Right' : 'row  gap-3 my-3 justify-content-center '}>
                    <div className="app-slider font-color col-lg-7 col-md-12">
                        <h2>{t("Appdescription")}</h2>
                        <p>
                            {getAppDesc(MainLanguage)}
                        </p>

                    </div>

                    <div className="new font-color col-lg-4 col-md-12">
                        <h2>{t("AppInfo")}</h2>
                        <div>
                            <span>{t("AppArchitecture")}: </span>
                            <span className='fw-bold'>{appinfo.appArchitecture}</span>
                        </div>
                        <div>
                            <span>{t("AppPackageName")}: </span>
                            <span className='fw-bold'>{appinfo.appPackageName}</span>
                        </div>
                        <div>
                            <span>{t("AppReleaseDate")}: </span>
                            <span className='fw-bold'>{appinfo.appReleaseDate}</span>
                        </div>
                        <div>
                            <span>{t("AppUbdateDate")}: </span>
                            <span className='fw-bold'>{appinfo.appUbdateDate}</span>
                        </div>
                        <div>
                            <span>{t("AppLanguage")}: </span>
                            <span className='fw-bold'>{appinfo.applanguage}</span>
                        </div>
                        <div>
                            <span>{t("AppRequired")}: </span>
                            <span className='fw-bold'>{appinfo.apprequired}</span>
                        </div>
                        <div>
                            <span>{t("AppVersion")}: </span>
                            <span className='fw-bold'>{appinfo.appversion}</span>
                        </div>
                        <div>
                            <span>{t("AppSize")}: </span>
                            <span className='fw-bold'>{appinfo.appsize}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={Inview && { opacity: 1, y: 0 }} transition={{ duration: 0.6, type: "spring" }} className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row font-color mt-4 Right pe-5' : 'row font-color mt-4'}>
                    <div className="related col-12 ps-5">
                        <h2>{t("relatedappsinfo")}</h2>
                        {/* related */}
                    </div>
                </motion.div>

                <div className="row">


                    <div className="Intro_Apps_inside d-flex flex-column align-items-center" >

                        <div className="col-12 d-flex flex-column  px-2 pe-5">
                            <h3 className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                                'col-12 ps-4 font-color Right' : 'col-12  ps-4  font-color my-2'} >{t("relatedappsinfo")}</h3>

                            <Link to='/Apps' className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                                'd-flex justify-content-start align-items-center mb-3 fs-5 align-self-start Right' :
                                'd-flex justify-content-end align-items-center mb-3 fs-5 align-self-end'}>
                                {t("LastAppsViewAll")}{MainLanguage === 'ar' || MainLanguage === 'ur' ? <LuChevronLeft className='mt-2 fs-5' />
                                    : <LuChevronRight />}</Link>
                        </div>
                        <div className="Intro_Apps_inside_cards row px-5 gap-4 pb-5">
                            {SpeceficApp?.data.realted.map((Related) =>
                                <AppCard key={Related._id} Free={Related.paid} Title={getAppTitleForCard(Related, MainLanguage)}
                                    Desc={(getAppDescForCard(Related, MainLanguage))} Cover={Related.appcover}
                                    Icon={Related.appicon} AppId={Related._id} Turn={true} IdHandler={HandleChangeId} />)}
                        </div>
                    </div>

                </div>

            </div>
        </section>}

    </>
}
