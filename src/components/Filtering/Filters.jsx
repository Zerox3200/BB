import React, { useState } from 'react'
import './Filters.scss';
import Categories from './FiltersFile';
import AppCard from '../card/card';
import { AllApps } from './FiltersFile';

export default function Filters() {
    const [Apps, setApps] = useState(AllApps);
    const [Category, setCategory] = useState('All');
    const [Paid, setPaid] = useState("All")

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
            const FilteredDataWithPaid = AllApps.filter((project) => {
                return project.Categorie === Type && project.Free === true;
            })

            setApps(FilteredDataWithPaid);
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
        <div className="FilterButtons row  align-items-center px-4">
            <h1 className='h5 col-xl-1 col-lg-12 col-md-8 col-sm-8 d-flex'>Categories:</h1>
            <div className="row mx-1 col-xl-10 col-lg-12 col-md-10">
                {Categories.map(ele =>
                    <button key={ele.id} type="button"
                        onClick={() => {
                            FilterButtons(ele.Name);
                            AppsFilters(ele.Name);
                        }} className={Category === ele.Name ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>{ele.Name}</button>)
                }
            </div>
        </div>
        <div className="FilterButtonsPrice row align-items-center px-4 mt-3">
            <h1 className='h5 col-xl-1 col-lg-12 col-md-8 col-sm-8 d-flex'>Price:</h1>
            <div className="row mx-1 col-xl-10 col-lg-12 col-md-10 ">
                <button onClick={() => {
                    FreeOrPaidButtons('All');
                    PaidFilter('All', null)
                }}
                    type="button" className={Paid === 'All' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>All</button>
                <button onClick={() => {
                    FreeOrPaidButtons('Free');
                    PaidFilter('Free', true)
                }}
                    type="button" className={Paid === 'Free' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>Free</button>
                <button onClick={() => {
                    FreeOrPaidButtons('Paid');
                    PaidFilter("Paid", false)
                }}
                    type="button" className={Paid === 'Paid' ? 'btn mx-2 my-1 Active' : 'btn mx-2 my-1'}>Paid</button>
            </div>
        </div>
        <div className="container FilteredApps mt-5 row">
            <h1 className='h4'><span>Home</span> / App store</h1>
            {Apps.map(ele => <AppCard key={ele.id} Free={ele.Free} />)}
        </div>
    </>
}
