import React, { useContext } from 'react'
import "./productsinfo.scss"
import Search from '../../components/Search/Search'
import { Link } from 'react-router-dom'
import { NavContext } from '../../Context/NavContext'
import appIcon from '../../Assets/Images/online-internet-symbol-icon.jpg'
import { FaShareAlt } from "react-icons/fa";
import googleplay from '../../Assets/Images/icons8-google-play.svg'
import MultipleItems from '../../components/Slider/Slider'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import AppCard from '../../components/card/card'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useTranslation } from 'react-i18next'

export default function Productsinfo() {
    const { margin } = useContext(NavContext)
    const { t } = useTranslation();
    const MainLanguage = reactLocalStorage.get('lan');
    return <>
        <section className={margin ? "prod-info  prod-info-Marined " : "prod-info  prod-info-Constant"} >
            <Search />
            <div className="prod-main-con ps-5 container">

                <div className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row Right justify-content-center ' : 'row justify-content-center '}>
                    <div className="col-11 mt-5">
                        <Link to={"/"}>{t('Home')}  /</Link>
                        <Link to={"/Apps"}> {t('AppStore')} /</Link>
                        <Link to={"/Apps"}> {t("quraaninfo")}/</Link>
                        <Link className='link-style' to={"/"}> {t("tajweed")}</Link>
                    </div>
                </div>

                <div className='row my-3 justify-content-center '>

                    <img className='col-md-2 app-icon' src={appIcon} alt="..." loading='lazy'/>

                    <div className="col-md-4 app-name font-color">
                        <h1 className='mb-3'>Tajweed App</h1>
                        <span className='m-2 '>Free</span>
                        <span className='m-2'>78 MB</span>
                    </div>

                    <div className="app-link col-md-6">
                        <Link className={MainLanguage === 'ar' || MainLanguage === "ur" ? " mt-3" : ""} to={"/"}>
                            <div className="share-link">
                                <FaShareAlt />
                            </div>
                        </Link>

                        <div className={MainLanguage === 'ar' || MainLanguage === "ur" ? "google-play mt-3" : "google-play "}>
                            <img src={googleplay} alt="..." loading='lazy' />
                            <span>
                                <span>Get it on</span>
                                <span>google play</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row Main_height gap-3 justify-content-center  Right' : 'row Main_height gap-3 justify-content-center '}>
                    <div className="app-slider col-lg-7 col-md-12 h-100 d-flex align-items-center">
                        <MultipleItems></MultipleItems>
                    </div>
                    <div className="new col-lg-4 col-md-12 h-100">
                        <h2 className='font-color'>What's new</h2>
                        <ul className='font-color'>
                            <li>removed email afds</li>
                            <li>removed emailsdgffdg</li>
                            <li>removed email</li>
                            <li>removed email Lorem ipsum dolor sit amet.</li>
                            <li>removed emailgggggggggggg</li>
                            <li>removed email Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>


                <div className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row  gap-3 my-3  justify-content-center Right' : 'row  gap-3 my-3 justify-content-center '}>
                    <div className="app-slider font-color col-lg-7 col-md-12">
                        <h2>App description</h2>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veniam facere consectetur, vel placeat dolorem deserunt magni nemo distinctio consequatur, molestias itaque fuga accusamus, facilis id recusandae. Totam sequi at minus quibusdam incidunt, vitae cupiditate distinctio cumque sint eveniet voluptates consectetur voluptatem sunt necessitatibus quae animi vel alias pariatur neque!
                        </p>

                    </div>

                    <div className="new font-color col-lg-4 col-md-12">
                        <h2>App Info</h2>
                        <div>
                            <span>App language: </span>
                            <span className='fw-bold'>English</span>
                        </div>
                        <div>
                            <span>App language: </span>
                            <span className='fw-bold'>English</span>
                        </div>
                        <div>
                            <span>App language: </span>
                            <span className='fw-bold'>English</span>
                        </div>
                        <div>
                            <span>App language: </span>
                            <span className='fw-bold'>English</span>
                        </div>
                        <div>
                            <span>App language: </span>
                            <span className='fw-bold'>English</span>
                        </div>

                    </div>
                </div>

                <div className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'row font-color mt-4 Right pe-5' : 'row font-color mt-4'}>
                    <div className="related col-12 ps-5">
                        <h2>{t("relatedappsinfo")}</h2>
                        {/* related */}
                    </div>
                </div>

                <div className="row" >


                    <div className="Intro_Apps_inside d-flex flex-column align-items-center">

                    <div className="col-12 d-flex flex-column  px-2 pe-5">
                    <h3 className={MainLanguage === 'ar' || MainLanguage === 'ur' ? 'col-12 ps-4 font-color Right' : 'col-12  ps-4  font-color my-2'} >{t("you")}</h3>

                        <Link to='/Apps' className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                            'd-flex justify-content-start align-items-center fs-5 align-self-start Right' :
                            'd-flex justify-content-end align-items-center fs-5 align-self-end'}>
                            {t("LastAppsViewAll")}{MainLanguage === 'ar' || MainLanguage === 'ur' ? <LuChevronLeft className='mt-2 fs-5' />
                                    : <LuChevronRight />}</Link>
                     </div>
                        <div className="Intro_Apps_inside_cards row px-5 gap-4">
                            <AppCard Free={true} />
                            <AppCard Free={true} />
                            <AppCard Free={true} />
                            <AppCard Free={true} />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </>
}
