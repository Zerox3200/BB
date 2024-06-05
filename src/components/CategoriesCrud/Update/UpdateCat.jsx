import React, { Suspense, lazy, useState } from 'react'
import './UpdateCat.scss';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Empty from '../../Empty/Empty';
import { HostLink } from '../../Host/Host';

const Preview = lazy(() => import("./Preview/Preview"));

export default function UpdateCat() {
    const [Popup, setPopup] = useState(false)
    const [Id, setId] = useState();
    const [loading, setLoading] = useState(false);
    const Categories = () => {
        return axios.get(`${HostLink}/Categories/GetAllCats`)
    }
    const { data: AllCategories, isLoading, refetch } = useQuery("Get Categories", Categories, {
        cacheTime: 3000000
    })


    const HandlePopup = (id) => {
        setPopup(Popup === true ? false : true);
        setId(id)
    }

    return <>
        <div className="UpdateForm">
            <h1 className='h5 form-label mt-4 font-color'>{AllCategories?.data?.result?.length === 0 ? null : "Update Category"}</h1>
            {isLoading || loading ? <Loading /> : AllCategories?.data?.result?.length === 0 ? <Empty />
                : AllCategories?.data?.result?.map((Cat, index) => <div className="card p-3 mt-3" key={index}>
                    <div className="card-body d-flex flex-column align-items-start">
                        <h5 className="card-title">{Cat.name.en}</h5>
                        <img src={`${HostLink}/${Cat.Icon}`} alt="..." className='my-4' />
                        <button className="btn bg-main" onClick={() => HandlePopup(Cat._id)}>Update</button>
                    </div>
                </div>)}
            {Popup && <Suspense fallback={<Loading />}>
                <Preview HandleShow={HandlePopup} ID={Id} setLoading={setLoading} refetch={refetch} />
            </Suspense>}
        </div>
    </>
}
