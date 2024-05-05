import React, { useState } from 'react'
import './Filters.scss';
import Categories from './FiltersFile';
import AppCard from '../card/card';
import { AllApps } from './FiltersFile';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { motion, AnimatePresence } from 'framer-motion'

export default function Filters() {
    const [Apps, setApps] = useState(AllApps);
    const [Category, setCategory] = useState('All');
    const [Paid, setPaid] = useState("All");
    const { t } = useTranslation();

    const MainLanguage = reactLocalStorage.get('lan');

    const FilterButtons = (Filter) => {
        setCategory(Filter);
    }

    const FreeOrPaidButtons = (Filter) => {
        setPaid(Filter);
    }

    const AppsFilters = (Type) => {
        if (Type === "All") {
            setApps(AllApps);
            return;
        };

        if (Paid === "Free") {
            const FilteredDataWithFree = AllApps.filter((project) => {
                return project.Categorie === Type && project.Free === true;
            })

            setApps(FilteredDataWithFree);
            return;
        }

        if (Paid === "Paid") {
            const FilteredDataWithPaid = AllApps.filter((project) => {
                return project.Categorie === Type && project.Free === false;
            })

            setApps(FilteredDataWithPaid);
            return;
        }

        const FilteredData = AllApps.filter((project) => {
            return project.Categorie === Type;
        })
        setApps(FilteredData);
    }


    const PaidFilter = (Free, FreeTruthly) => {
        if (Free === 'All') {
            if (Category === "All") {
                setApps(AllApps);
                return;
            }
            const FilterPaid = AllApps.filter((PaidElement) => {
                return PaidElement.Categorie === Category;
            })
            setApps(FilterPaid);
            return;
        }

        if (Category !== 'All') {
            const FilterPaid = AllApps.filter((PaidElement) => {
                return PaidElement.Free === FreeTruthly && PaidElement.Categorie === Category;
            })
            setApps(FilterPaid);
            return;
        }

        const FilterPaidAll = AllApps.filter((PaidElement) => {
            return PaidElement.Free === FreeTruthly;
        })
        setApps(FilterPaidAll);
        return;
    }
    return <>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 0.6 }} className={MainLanguage === 'ar' || MainLanguage === 'ur' ? "FilterButtons row align-items-center px-4 Right"
            : "FilterButtons row  align-items-center px-4"}>
            <h1 className={'h5 col-xl-1 col-lg-12 col-md-8 col-sm-8 d-flex'}>{t("Categories")}:</h1>
            <div className="row mx-1 col-xl-10 col-lg-12 col-md-10">
                {Categories.map(ele =>
                    <button key={ele.id} type="button"
                        onClick={() => {
                            FilterButtons(ele.Name);
                            AppsFilters(ele.Name);
                        }} className={Category === ele.Name ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{ele.Name}</button>)
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
                    type="button" className={Paid === 'All' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{t("All") }</button>
                <button onClick={() => {
                    FreeOrPaidButtons('Free');
                    PaidFilter('Free', true)
                }}
                    type="button" className={Paid === 'Free' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{t("Free")}</button>
                <button onClick={() => {
                    FreeOrPaidButtons('Paid');
                    PaidFilter("Paid", false)
                }}
                    type="button" className={Paid === 'Paid' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{t("Paid") }</button>
            </div>
        </motion.section>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
            className={MainLanguage === 'ar' || MainLanguage === 'ur' ?
                "container FilteredApps mt-5 row justify-content-center column-gap-3 mx-auto Right" :
                "container FilteredApps mt-5 row justify-content-center column-gap-3 mx-auto"}>
            <div className="FilteredApps_Title">
                <h1 className='h4'><Link to='/'>{t('Home')}</Link> / {t("AppStore")}</h1>
            </div>
            <div className="row justify-content-evenly">
                <AnimatePresence>
                    {Apps.map(ele => <AppCard key={ele.id} Free={ele.Free} />)}
                </AnimatePresence>
            </div>
        </motion.section>
    </>
}
