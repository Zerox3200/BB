import React from 'react';
import './DeleteCat.scss';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function DeleteCat() {
    const Categories = () => {
        return axios.get("http://localhost:3000/Categories/GetAllCats")
    }
    const { data: AllCategories, isLoading } = useQuery("Get Categories", Categories, {
        cacheTime: 3000000
    })

    return <div className='DelForm'>
        <h1 className='h5 form-label mt-4 font-color'>DeleteCat</h1>
        <div className="card p-3">
            <div className="card-body d-flex flex-column align-items-start">
                <h5 className="card-title">Cat Name</h5>
                <img src="" alt="..." className='my-2' />
                <button className="btn bg-main">Delete</button>
            </div>
        </div>
    </div>
}
