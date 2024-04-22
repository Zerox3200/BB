import React, { useContext } from 'react'
import './AppsFilter.scss'
import Search from '../../components/Search/Search'
import Filters from '../../components/Filtering/Filters'
import { Helmet } from 'react-helmet'
import { NavContext } from '../../Context/NavContext';


export default function AppsFilter() {
    const { margin } = useContext(NavContext);

    return <>
        <div className={margin ? "AppsFilter AppsFilterMargined" : "AppsFilter AppsFilterConstant"}>
            <Helmet>
                <title>Apps store</title>
            </Helmet>
            <Search />
            <Filters />
        </div>
    </>
}
