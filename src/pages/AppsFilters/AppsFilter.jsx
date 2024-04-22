import React from 'react'
import './AppsFilter.scss'
import Search from '../../components/Search/Search'
import Filters from '../../components/Filtering/Filters'
import { Helmet } from 'react-helmet'


export default function AppsFilter() {
    return <>
        <div className="AppsFilter">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Apps store</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" type="svg/x-icon" href="../../Assets/Images/_icon.svg"></link>
            </Helmet>
            <Search />
            <Filters />
        </div>
    </>
}
