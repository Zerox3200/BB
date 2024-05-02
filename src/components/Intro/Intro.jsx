import React, { useRef } from 'react'
import './Intro.scss'
import { Link } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import AppCard from '../card/card';
import Category from '../Category/Category';
import Quran from '../../Assets/Images/Icons/Qur_ān.svg';
import Salah from '../../Assets/Images/Icons/Salāh.svg';
import Haj from '../../Assets/Images/Icons/Hajj.svg';
import Masjed from '../../Assets/Images/Icons/Masjid.svg';
import Azkar from '../../Assets/Images/Icons/Zakāh.svg';
import Tasbeh from '../../Assets/Images/Icons/Tasbeeh.svg';
import Wudouu from '../../Assets/Images/Icons/Wudu_.svg';
import Duaa from '../../Assets/Images/Icons/Du_ā.svg';
import Search from '../Search/Search';
import { useTranslation } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { motion,useInView } from 'framer-motion';

export default function Intro() {
    const { t } = useTranslation();
    const Cat = useRef()
    const Inview = useInView(Cat,{once:true});
    const MainLanguage = reactLocalStorage.get('lan');
    return <>
        <Search />
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,type:'spring'}} className="Intro_Text mt-3 d-flex flex-wrap align-items-center py-5 px-2 col-xl-11 col-sm-12">
            {/* <img src={Icon} alt="..." loading='lazy' /> */}
            <article className='p-4 col-md-9'>
                <h1 className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'h3 fw-bold Right' : 'h3 fw-bold'}>{t("IntroTitle")}</h1>
                <p className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'h-5 Right' : 'h-5'}>{t("Intro1")}</p>
                <p className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'Right' : ''}>{t("Intro2")}.</p>
            </article>
        </motion.div>
        <div className="container Intro_Apps row w-100 justify-content-center px-3">
            <motion.div className="Intro_Apps_inside d-flex flex-column align-items-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, type: 'spring' }} > 

                <div className="Intro_Apps_inside_cards row w-100 px-1 justify-content-evenly">
                    <div className="col-12 d-flex flex-column px-2 pe-4">

                        <h1 className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'title h3 align-self-end Right' : 'title h3 align-self-start'}>{t("LastApps")}</h1>

                        <Link to='/Apps' className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                            'd-flex justify-content-start align-items-center fs-5 align-self-start Right' :
                            'd-flex justify-content-end align-items-center fs-5 align-self-end '}>
                            {t("LastAppsViewAll")}{MainLanguage === 'ar' || MainLanguage === 'ur' ? <LuChevronLeft className='mt-2 fs-5' />
                                : <LuChevronRight />}</Link>
                    </div>
                    <AppCard Free={true} />
                    <AppCard Free={true} />
                    <AppCard Free={true} />
                    <AppCard Free={true} />
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
                    <Category Image={Quran} />
                    <Category Image={Salah} />
                    <Category Image={Haj} />
                    <Category Image={Masjed} />
                    <Category Image={Azkar} />
                    <Category Image={Tasbeh} />
                    <Category Image={Wudouu} />
                    <Category Image={Duaa} />
                </div>
            </motion.div>
        </div>
    </>
}
