import React from 'react'
import './AppsFilter.scss'
import Search from '../../components/Search/Search'
import Filters from '../../components/Filtering/Filters'


export default function AppsFilter() {
    return <>
        <div className="AppsFilter">
            <Search />
            <Filters />
        </div>
    </>
}
