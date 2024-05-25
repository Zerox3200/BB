import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import Loading from '../../Loading/Loading';
import "./Deleteadmin.scss"
export default function DeleteAdmin() {

    const [admin, setadmin] = useState([])
    const [loading, setloading] = useState(false)
    const [refetch, setrefetch] = useState(false)

    async function Deleteadmin(id) {
        let token = localStorage.getItem("token")
        let { data } = await axios.delete(`http://localhost:3000/auth/DeleteUser/${id}`, {
            headers: { 'token': `${token}` }
        })
        setrefetch(true)
        console.log(data);
    }

    async function fetchdata() {
        setloading(true)
        const { data } = await axios.get("http://localhost:3000/auth/getalladmin", {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        console.log(data);
        setadmin(data.result)
        setloading(false)
    }
    useEffect(() => {
        fetchdata()
        setrefetch(false)
    }, [refetch])
    return (
        <>
            {loading ? <Loading /> : <div className='admins'>
                {admin.map((ele) => {
                    return (
                        <div key={ele._id} className="container">
                            <div className="row admin">
                                <div className="admin-name col-10">
                                    <h3 className='font-color'>Name: {ele.name}</h3>
                                    <h5 className='app-desc font-color'>Email: {ele.email}</h5>
                                    <h5 className='font-color'>Role: {ele.role}</h5>
                                    <h6 className='font-color'>Created At:
                                        <p className='admin-created font-black'>{ele.createdAt}</p>
                                    </h6>

                                </div>

                                <span onClick={() => Deleteadmin(ele.email)} className="deletespan col-2"><MdDeleteForever /></span>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>

    )

}
