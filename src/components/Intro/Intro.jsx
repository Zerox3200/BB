import React, { useContext } from 'react'
import './Intro.scss'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { NavContext } from '../../Context/navContext';
import { Link } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";
import AppCard from '../card/card';
import Category from '../Category/Category';

export default function Intro() {
    const { ShowMenu, Showing } = useContext(NavContext);

    return <>
        <div className='Intro p-3 d-flex justify-content-between'>
            <div className="Intro_Search">
                <input type="text" className='form-control' />
                <IoSearchOutline />
            </div>
            {ShowMenu ? <IoCloseOutline onClick={Showing} /> : <IoMdMenu onClick={Showing} />}
        </div>
        <div className="Intro_Text mt-3 d-flex align-items-center px-lg-5 px-md-0">
            <article>
                <h1 className='h5 fw-bold'>Mobile Application For The Ummah!</h1>
                <p>Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.</p>
                <p>Our aim is to server the Islamic Community by combining Technical Acumen with Classical Islamic Sciences and
                    Juriprudence to deliver Useful Applications for everyday use.
                </p>
            </article>
        </div>
        <div className="container Intro_Apps row w-100 justify-content-center my-3">
            <div className="Intro_Apps_inside">
                <h1 className='h3'>Our latest apps</h1>
                <Link className='d-flex justify-content-end align-items-center fs-5'>View all <LuChevronRight /></Link>
                <div className="Intro_Apps_inside_cards row ">
                    <AppCard />
                    <AppCard />
                    <AppCard />
                    <AppCard />
                </div>
            </div>
        </div>
        <div className="container Intro_Categories row w-100 justify-content-center my-5">
            <div className="Intro_Categories_inside">
                <h1 className='h3'>Browser by category</h1>
                <Link className='col-md-12 d-flex justify-content-end align-items-center fs-5'>View all <LuChevronRight /></Link>
                <div className="Intro_Categories_cards d-flex flex-wrap justify-content-lg-between justify-content-sm-start">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </div>
        </div>
    </>
}
