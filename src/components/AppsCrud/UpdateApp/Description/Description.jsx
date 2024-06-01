import React, { useState } from 'react'
import './Description.scss'
import * as Yup from 'yup';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useFormik } from 'formik';
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri';

export default function Description({ HandleShow, ID, refetch }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        NewDesc: Yup.string().min(20).max(800).required("Add new Description is required")
    })

    const SendNameUpdate = async (values) => {
        setLoadingButton(true)
        await axios.patch(`http://localhost:3000/app/Update/${ID}`, {
            key: "description",
            result: values.NewDesc
        }, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        },
        ).then(() => {
            setLoadingButton(false);
            refetch();
            HandleShow();
        }).catch((err) => {
            console.log(err);
        })
    }

    const Formik = useFormik({
        initialValues: {
            NewDesc: ""
        }, validationSchema,
        onSubmit: SendNameUpdate
    });

    return <>
        <motion.div className="popupDescription" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="Descform" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5' onSubmit={Formik.handleSubmit}>
                    <label htmlFor="NewDesc">New Description</label>
                    <textarea type="" className="form-control" id="NewDesc" name="NewDesc" rows="10"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.NewDesc && Formik.touched.NewDesc ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.NewDesc}</div> : null}

                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3' type='submit'>Submit</button>}
                </form>
            </motion.div>
        </motion.div>
    </>
}
