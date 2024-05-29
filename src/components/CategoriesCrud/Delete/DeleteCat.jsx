import React, { useState } from 'react';
import './DeleteCat.scss';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import { reactLocalStorage } from 'reactjs-localstorage';
import Empty from '../../Empty/Empty';
import toast from 'react-hot-toast';
import SubmitToast from '../../SubmitToast/SubmitToast';

export default function DeleteCat() {
    const [loading, setLoading] = useState(false);
    const [Enable, setEnable] = useState(true);
    const Categories = () => {
        return axios.get("http://localhost:3000/Categories/GetAllCats")
    }
    const { data: AllCategories, isLoading, refetch } = useQuery("Get Categories", Categories, {
        cacheTime: 3000000,
        enabled: Enable
    })

    const DeleteCategory = async (id) => {
        setLoading(true)
        setEnable(false)
        await axios.delete(`http://localhost:3000/Categories/DeleteCat/${id}`, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        }).then(() => {
            setLoading(false);
            setEnable(true);
            refetch();
            toast(<SubmitToast Message='Category Deleted Successfully' />)
        }).catch((err) => console.log(err));
    }

    return <div className='DelForm'>
        <h1 className='h5 form-label mt-4 font-color'>{AllCategories?.data?.result?.length === 0 ? null : "Delete Category"}</h1>
        {isLoading || loading ? <Loading /> : AllCategories?.data?.result?.length === 0 ? <Empty /> :
            AllCategories?.data?.result?.map((ele, index) => <div className="card p-3 mt-3" key={index}>
                <div className="card-body d-flex flex-column align-items-start">
                    <h5 className="card-title">{ele.name.en}</h5>
                    <img src={`http://localhost:3000/${ele.Icon}`} alt="..." className='my-4' />
                    <button className="btn bg-main" onClick={() => DeleteCategory(ele._id)}>Delete</button>
                </div>
            </div>)}
    </div>
}
