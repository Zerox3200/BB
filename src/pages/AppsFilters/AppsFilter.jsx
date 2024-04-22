import React from 'react'
import './AppsFilter.scss'
import Search from '../../components/Search/Search'
import Filters from '../../components/Filtering/Filters'
import { Helmet } from 'react-helmet'


export default function AppsFilter() {
    return <>
        <div className="AppsFilter">
            <Helmet>
                <title>Apps store</title>
            </Helmet>
            <Search />
            <Filters />
        </div>
    </>
}
