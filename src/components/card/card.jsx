import React from 'react'
import './card.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useTranslation } from 'react-i18next';

export default function AppCard({ Free, Title, Desc, Cover, Icon, AppId }) {
    const MainLanguage = reactLocalStorage.get('lan');
    const { t } = useTranslation();


    const Description = Desc?.split(" ");

    return <motion.div className={MainLanguage === 'ar' || MainLanguage === 'ur' ? "card p-0 Right" : "card p-0"} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <Link to={`/${AppId}`} >
            <img src={`http://localhost:3000/${Cover}`}
                className="card-img-top mx-auto"
                alt="..." />
        </Link>
        <div className="card-body d-flex justify-content-between align-items-center py-1">

            <img src={`http://localhost:3000/${Icon}`} alt="..." loading='lazy' className='col-md-4 ' />

            <div className="card-body-details col-md-8 h-100 mt-2 ">

                <div className="d-flex justify-content-between align-content-center px-1">
                    <h1 className='h6 px-2'>{Title}</h1>
                    {Free ? <span className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                        'Price RightPos' : 'Price LeftPos'}>Free</span> : null}
                </div>

                <p className='m-0 px-2'>{Description?.length > 11 ? Description?.join(" ") + `........`
                    : Desc}</p>
                <Link to={`/${AppId}`} className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                    'fw-bold Details RightPos' : "fw-bold Details LeftPos"}>{t("Details")}</Link>
            </div>

        </div>

    </motion.div>
}
// /BB/static/media/online-internet-symbol-icon.d3144d2dfcc715366f6d.jpg