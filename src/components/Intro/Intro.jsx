import React from 'react'
import './Intro.scss'
import { Link } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";
import AppCard from '../card/card';
import Category from '../Category/Category';
import Icon from '../../Assets/Images/_icon.svg';
import Quran from '../../Assets/Images/Icons/x1024/Qur_ān.svg';
import Salah from '../../Assets/Images/Icons/x1024/Salāh.svg';
import Haj from '../../Assets/Images/Icons/x1024/Hajj.svg';
import Masjed from '../../Assets/Images/Icons/x1024/Masjid.svg';
import Azkar from '../../Assets/Images/Icons/x1024/Zakāh.svg';
import Tasbeh from '../../Assets/Images/Icons/x1024/Tasbeeh.svg';
import Wudouu from '../../Assets/Images/Icons/x1024/Wudu_.svg';
import Duaa from '../../Assets/Images/Icons/x1024/Du_ā.svg';
import Search from '../Search/Search';

export default function Intro() {

    return <>
        <Search />
        <div className="Intro_Text mt-3 d-flex flex-wrap align-items-center p-5 col-xl-11  col-sm-12">
            <img src={Icon} alt="..." loading='lazy' />
            <article className='col-md-9'>
                <h1 className='h5 fw-bold'>Mobile Application For The Ummah!</h1>
                <p>Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.</p>
                <p>Our aim is to server the Islamic Community by combining Technical Acumen with Classical Islamic Sciences and
                    Juriprudence to deliver Useful Applications for everyday use.
                </p>
            </article>
        </div>
        <div className="container Intro_Apps row w-100 justify-content-center">
            <div className="Intro_Apps_inside">
                <h1 className='h3'>Our latest apps</h1>
                <Link className='d-flex justify-content-end align-items-center fs-5'>View all <LuChevronRight /></Link>
                <div className="Intro_Apps_inside_cards row ">
                    <AppCard Free={true} />
                    <AppCard Free={true} />
                    <AppCard Free={true} />
                    <AppCard Free={true} />
                </div>
            </div>
        </div>
        <div className="container Intro_Categories row w-100 justify-content-center my-5 pb-5">
            <div className="Intro_Categories_inside">
                <h1 className='h3'>Browser by category</h1>
                <Link className='col-md-12 d-flex justify-content-end align-items-center fs-5'>View all <LuChevronRight /></Link>
                <div className="Intro_Categories_cards d-flex flex-wrap justify-content-lg-between justify-content-sm-start">
                    <Category Image={Quran} />
                    <Category Image={Salah} />
                    <Category Image={Haj} />
                    <Category Image={Masjed} />
                    <Category Image={Azkar} />
                    <Category Image={Tasbeh} />
                    <Category Image={Wudouu} />
                    <Category Image={Duaa} />
                </div>
            </div>
        </div>
    </>
}
