import axios from 'axios'
import React, { useEffect } from 'react'
import "./DeleteApp.scss"
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import Loading from '../../Loading/Loading';
import Empty from '../../Empty/Empty';

export default function DeleteApp() {

    const [Apps, setApps] = useState([])
    const [loading, setloading] = useState(false)
    const [refetch, setrefetch] = useState(false)

    async function Delete(id) {
        let token = localStorage.getItem("token")
        let { data } = await axios.delete(`http://localhost:3000/app/DeleteApp/${id}`, {
            headers: { 'token': `${token}` }
        })
        setrefetch(true)
        console.log(data);
    }

    async function fetchdata() {
        setloading(true)
        const { data } = await axios.get("http://localhost:3000/app/GetAllApps")
        setApps(data.result)
        setloading(false)
    }
    useEffect(() => {
        fetchdata()
        setrefetch(false)
    }, [refetch])
    return (
        <>
            {loading ? <Loading /> : Apps?.length === 0 ? <Empty /> : <div className='admin-apps'>
                {Apps.map((ele) => {
                    return (
                        <div key={ele._id} className="container">
                            <div className="row app">
                                <div className="appicon col-3 ">
                                    <img src={`http://localhost:3000/${ele.appicon}`} alt="..." />
                                </div>

                                <div className="app-name col-7">
                                    <h1 className='font-color'>{ele.name[0].value}</h1>
                                    <p className='app-desc'>{ele.description[0].value?.split(' ').splice(0, 20).join(' ') + " etc.."}</p>
                                </div>

                                <span onClick={() => Delete(ele._id)} className="deletespan col-2"><MdDeleteForever /></span>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>

    )
}
