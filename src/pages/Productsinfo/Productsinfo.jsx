import React, { useContext } from 'react'
import "./productsinfo.scss"
import Search from '../../components/Search/Search'
import { Link } from 'react-router-dom'
import { NavContext } from '../../Context/NavContext'
import appIcon from '../../Assets/Images/online-internet-symbol-icon.jpg'
import { FaShareAlt } from "react-icons/fa";
import googleplay from '../../Assets/Images/icons8-google-play.svg'
import MultipleItems from '../../components/Slider/Slider'
import { LuChevronRight } from 'react-icons/lu'
import AppCard from '../../components/card/card'

export default function Productsinfo() {
    const { margin } = useContext(NavContext)
    return (
        <div className={margin ? "prod-info  prod-info-Marined " : "prod-info  prod-info-Constant"} >
            <Search />
            <div className="prod-main-con ps-5 container">

                <div className="row">
                    <div className="col-12 mt-5">
                        <Link to={"/"}> Home /</Link>
                        <Link to={"/Apps"}> App store /</Link>
                        <Link to={"/Apps"}> Quran /</Link>
                        <Link className='link-style' to={"/"}> Tajweed App</Link>
                    </div>
                </div>

                <div className="row my-3">

                    <img className='col-2 app-icon' src={appIcon} alt="" />

                    <div className="col-4 app-name font-color">
                        <h1>Tajweed App</h1>
                        <span className='p-2 m-2'>free</span>
                        <span className='p-2 m-2'>78 MB</span>
                    </div>

                    <div className="app-link col-6 d-flex justify-content-end">
                        <Link to={"/"}>
                            <div className="share-link">
                                <FaShareAlt />
                            </div>
                        </Link>

                        <div className="google-play">
                            <img src={googleplay} alt="" />
                            <span>
                                <span>Get it on</span>
                                <span>google play</span>
                            </span>

                        </div>

                    </div>

                </div>

                <div className="row gap-3 ">
                    <div className="app-slider col-7">
                        <MultipleItems></MultipleItems>
                    </div>
                    <div className="new col-4">
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
                <div className="row gap-3 my-2 ">
                    <div className="app-slider font-color col-7">
                        <h2>App description</h2>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veniam facere consectetur, vel placeat dolorem deserunt magni nemo distinctio consequatur, molestias itaque fuga accusamus, facilis id recusandae. Totam sequi at minus quibusdam incidunt, vitae cupiditate distinctio cumque sint eveniet voluptates consectetur voluptatem sunt necessitatibus quae animi vel alias pariatur neque!
                        </p>

                    </div>

                    <div className="new font-color col-4">
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

                <div className="row font-color">
                    <div className="related col-12">
                        <h2>Related apps</h2>


                        {/* related */}


                    </div>
                </div>

                <div className="row">
                    <div className="related ">
                        <h2 className='col-12 font-color'>you might also like</h2>

                        <div className="Intro_Apps_inside d-flex flex-column align-items-center">

                            <Link to='/Apps' className='d-flex justify-content-end align-items-center fs-5 align-self-end'>
                                View all <LuChevronRight /></Link>
                            
                            <div className="Intro_Apps_inside_cards row px-5 gap-4">
                                <AppCard Free={true} />
                                <AppCard Free={true} />
                                <AppCard Free={true} />
                                <AppCard Free={true} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
