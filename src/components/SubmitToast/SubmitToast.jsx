import React from 'react'

export default function SubmitToast({ Message }) {
    return <>
        <article className='d-flex justify-content-center column-gap-4'>
            <h1 className='m-0'>{Message}</h1>
        </article>
    </>
}
