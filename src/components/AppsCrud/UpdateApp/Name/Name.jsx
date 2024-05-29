import React, { useState } from 'react'
import './Name.scss'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Name({ HandleShow, ID, refetch }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        NewName: Yup.string().required("Add new name is required")
    })

    const SendNameUpdate = async (values) => {
        setLoadingButton(true)
        await axios.patch(`http://localhost:3000/app/Update/${ID}`, {
            key: "name",
            result: values.NewName
        }, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        },
        ).then((res) => {
            setLoadingButton(false);
            refetch();
            HandleShow();
        }).catch((err) => {
            console.log(err);
        })
    }

    const Formik = useFormik({
        initialValues: {
            NewName: ""
        }, validationSchema,
        onSubmit: SendNameUpdate
    });

    return <>
        <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="Nameform" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5' onSubmit={Formik.handleSubmit}>
                    <label htmlFor="NewName">New Name</label>
                    <input type="text" className="form-control" id="NewName" name="NewName"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.NewName && Formik.touched.NewName ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.NewName}</div> : null}

                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3' type='submit'>Submit</button>}
                </form>
            </motion.div>
        </motion.div >
    </>
}
