import React from 'react'
import './card.scss';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useTranslation } from 'react-i18next';
import { HostLink } from '../Host/Host';

export default function AppCard({ Free, Title, Desc, Cover, Icon, AppId, IdHandler, Turn }) {
    const MainLanguage = reactLocalStorage.get('lan');
    const { t } = useTranslation();

    const { pathname } = useLocation();


    const Description = Desc?.split(" ");

    return <motion.div onClick={() => Turn && IdHandler()} className={MainLanguage === 'ar' ||
        MainLanguage === 'ur' ? "card p-0 Right mx-auto" : "card p-0 mx-auto"}
        animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <Link to={`/AppInfo/${AppId}`}>
            <img src={`${HostLink}/${Cover}`}
                className="card-img-top mx-auto"
                alt="..." />
        </Link>
        <div className="card-body d-flex justify-content-between align-items-center py-1 mt-2">

            <img src={`${HostLink}/${Icon}`} alt="..." loading='lazy' className='col-md-4' />
            {/* 
            <Link to={`/AppInfo/${AppId}`} className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                'fw-bold Details RightPos' : "fw-bold Details LeftPos"}>{t("Details")}</Link> */}


            <div className="card-body-details col-md-8">

                <article className="px-1">
                    <h1 className='h6 px-2'>{Title}</h1>
                    {Free ? <span className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                        'Price RightPos' : 'Price LeftPos'}>{t("Free")}</span> : null}

                    <p className={pathname === "/Apps" ? 'm-0 px-2 UpdatePos' : "m-0 px-2"}>
                        {Description?.length > 7 ? Description?.slice(0, 7).join(" ") + `........`
                            : Desc + "  ........."}
                    </p>
                </article>


            </div>

        </div>

    </motion.div>
}
