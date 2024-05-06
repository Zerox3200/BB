import React from 'react'
import { MdDone } from "react-icons/md";

export default function Toast() {
    return <>
        <div className="Main_Icon">
            <MdDone />
        </div>
        <article className='h-100 d-flex flex-column'>
            <h1 className='m-0'>Message Sent</h1>
            <p className='m-0'>JazākAllāhu Khayraa</p>
            <p className='m-0'>We will get back to you soon</p>
        </article>
    </>
}
